import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IEmailCreate, IEmailListByMemberId, IEmailMainByMemberId, IEmailUpdate } from '../../interfaces/member/email.type';

@Injectable()
export class EmailService {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  GET  ---------------- */
    public async getListByMemberId({ memberId }: IEmailListByMemberId) {
        // const findMember = await this.prisma.member.findUnique({
        //     where: { id: memberId },
        //     include: { email: true },
        // });
        // if (!findMember) throw new NotFoundException('Member is not found');

        const emails = await this.prisma.memberEmail.findMany({
            where: { memberId },
        });

        return emails;
    }

    public async getMainByMemberId({ memberId }: IEmailMainByMemberId) {
        const findMember = await this.prisma.member.findUnique({
            where: { id: memberId },
            include: { email: true },
        });
        if (!findMember) throw new NotFoundException('Member is not found');

        let findMainEmail = undefined;
        for (const obj of findMember.email) {
            if (obj.isMain) {
                findMainEmail = obj;
                break;
            }
        }

        return findMainEmail;
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: IEmailCreate[]) {
        const uniqueMemberId = Array.from(new Set(dto.map((item) => item.memberId)));
        const errors = [];

        for (const userId of uniqueMemberId) {
            //
            const findMember = await this.prisma.member.findUnique({
                where: { id: userId },
                include: { email: true },
            });
            if (!findMember) {
                errors.push({ memberId: userId, error: 'Member is not found' });
                continue;
            }

            //
            const emails = dto.filter((user) => user.memberId === userId);

            //
            const checkEmailsIsExist = emails.some((obj1) => {
                return findMember.email.some((obj2) => {
                    return obj1.email === obj2.email;
                });
            });
            if (checkEmailsIsExist) {
                errors.push({ memberId: userId, error: 'Email is exist' });
                continue;
            }

            //
            const isMainInDb = findMember.email.some((email) => email.isMain);
            const isMainInReq = emails.some((email) => email.isMain);
            if (isMainInDb && isMainInReq) {
                errors.push({ memberId: userId, error: 'Main email is exist' });
                continue;
            }

            //
            const createEmailPromises = emails.map(async (emailObj) => {
                /**
                 * change this when use postgres on createMany
                 * ONLY SQLite
                 */
                const { memberId, isMain, email } = emailObj;
                return this.prisma.memberEmail.create({
                    data: { memberId, isMain, email: email.toLocaleLowerCase() },
                });
            });
            await Promise.all(createEmailPromises);
        }

        if (errors.length !== 0) {
            throw new BadRequestException([
                {
                    message: 'Error add all emails',
                    errors,
                },
            ]);
        }
        return { message: 'Emails add done' };
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IEmailUpdate[]) {
        const uniqueMemberId = Array.from(new Set(dto.map((item) => item.memberId)));
        const errors = [];

        for (const userId of uniqueMemberId) {
            //
            const findMember = await this.prisma.member.findUnique({
                where: { id: userId },
                include: { email: true },
            });
            if (!findMember) {
                errors.push({ memberId: userId, error: 'Member is not found' });
                continue;
            }

            //
            const emails = dto.filter((user) => user.memberId === userId);

            // check id
            const checkEmailsById = emails.every((emailInReq) => {
                return findMember.email.find((emailInDb) => {
                    return emailInReq.id === emailInDb.id;
                });
            });
            if (!checkEmailsById) {
                errors.push({ memberId: userId, error: 'Email is not exist' });
                continue;
            }

            // check is main
            const isMainInReq = emails.some((email) => email.isMain);
            if (isMainInReq) {
                const isMainInReqFilter = emails.filter((email) => email.isMain);
                if (isMainInReqFilter.length > 1) {
                    errors.push({ memberId: userId, error: 'There can only be one primary email' });
                    continue;
                }

                const isMainInDb = findMember.email.find((email) => email.isMain);
                const isMainInReq = isMainInReqFilter[0];

                if (isMainInDb && isMainInReq && isMainInDb.id !== isMainInReq.id) {
                    const isMainInDbInReq = emails.find((email) => email.id === isMainInDb.id && isMainInDb);
                    if ((isMainInDbInReq && isMainInDbInReq.isMain) || !isMainInDbInReq) {
                        errors.push({ memberId: userId, error: 'There can only be one primary email' });
                        continue;
                    }
                }
            }

            // update in db
            for (const emailData of emails) {
                const { id, memberId, isMain, email } = emailData;
                await this.prisma.memberEmail.update({
                    where: { id },
                    data: { memberId, isMain, email: email.toLocaleLowerCase() },
                });
            }
        }

        if (errors.length !== 0) {
            throw new BadRequestException([
                {
                    message: 'Error update all emails',
                    errors,
                },
            ]);
        }
        return { message: 'Emails update done' };
    }

    /* ----------------  DELETE  ---------------- */
    public async delete(dto: string[]) {
        const deleteRes = this.prisma.memberEmail.deleteMany({
            where: { id: { in: dto } },
        });

        return deleteRes;
    }
}

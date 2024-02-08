import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IEmailCreate, IEmailListByMemberId, IEmailMainByMemberId, IEmailUpdate } from '../../interfaces/member/email.type';
import { MemberService } from '../member/member.service';

@Injectable()
export class EmailService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly memberService: MemberService,
    ) {}

    /* ----------------  GET  ---------------- */
    public async getListByMemberId({ memberId }: IEmailListByMemberId) {
        return this.prisma.memberEmail.findMany({
            where: { memberId },
        });
    }

    public async getMainByMemberId({ memberId }: IEmailMainByMemberId) {
        return this.prisma.memberEmail.findMany({
            where: { memberId, isMain: true },
        });
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: IEmailCreate[]) {
        const uniqueMemberId = Array.from(new Set(dto.map((item) => item.memberId)));
        const errors: string[] = [];

        const createNewEmailsToMember = uniqueMemberId.map(async (memberId) => {
            const member = await this.memberService.getByIdNoHaveError({ id: memberId });
            if (!member) {
                errors.push(`memberId: (${memberId}) is not found`);
                return;
            }

            const sortDto = dto.filter((email) => email.memberId === memberId);

            const createEmails = sortDto.map((newEmail) => {
                return this.prisma.memberEmail.create({
                    data: {
                        memberId: newEmail.memberId,
                        isMain: newEmail.isMain,
                        email: newEmail.email,
                    },
                });
            });
            return Promise.all(createEmails);
        });
        await Promise.all(createNewEmailsToMember);

        if (errors.length !== 0) {
            throw new BadRequestException(errors);
        }
        return { message: 'Emails add done' };
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IEmailUpdate[]) {
        const errors: string[] = [];

        for (const email of dto) {
            const checkEmail = await this.prisma.memberEmail.findUnique({
                where: { id: email.id },
            });
            if (!checkEmail) {
                errors.push(`email id: (${email.id}) is not found`);
                continue;
            }

            await this.prisma.memberEmail.update({
                where: { id: email.id },
                data: {
                    memberId: email.memberId,
                    isMain: email.isMain,
                    email: email.email,
                },
            });
        }

        if (errors.length !== 0) {
            throw new BadRequestException(errors);
        }
        return { message: 'Emails update done' };
    }

    /* ----------------  DELETE  ---------------- */
    public async delete(dto: string[]) {
        return this.prisma.memberEmail.deleteMany({
            where: { id: { in: dto } },
        });
    }
}

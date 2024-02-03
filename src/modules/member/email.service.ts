import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { IEmail, IEmailCreate, IEmailDelete, IEmailListByMemberId, IEmailMainByMemberId, IEmailUpdate } from '../../interfaces/member/email.type';

@Injectable()
export class EmailService {
    constructor(private readonly prisma: DatabaseService) {}

    /* ----------------  GET  ---------------- */
    public async getListByMemberId({ memberId }: IEmailListByMemberId) {
        const findMember = await this.findMemberById(memberId);
        return findMember.email;
    }

    public async getMainByMemberId({ memberId }: IEmailMainByMemberId) {
        const findMember = await this.findMemberById(memberId);

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
    public async create({ email, memberId, isMain }: IEmailCreate) {
        const findMember = await this.findMemberById(memberId);
        this.checkEmailIsExist(findMember.email, email);

        if (isMain) {
            this.checkMainEmailIsExist(findMember.email);
        }

        const createEmail = await this.prisma.memberEmail.create({
            data: { memberId, isMain, email: email.toLocaleLowerCase() },
        });

        return createEmail;
    }

    /* ----------------  PUT  ---------------- */
    public async update({ id, memberId, email, isMain }: IEmailUpdate) {
        const findMember = await this.findMemberById(memberId);
        this.checkEmailIsExist(findMember.email, email);
        this.checkEmailById(findMember.email, id);

        if (isMain) {
            this.checkMainEmailIsExist(findMember.email);
        }

        const updateEmail = await this.prisma.memberEmail.update({
            where: { id },
            data: { email: email.toLocaleLowerCase(), isMain },
        });

        return updateEmail;
    }

    /* ----------------  DELETE  ---------------- */
    public async delete({ id }: IEmailDelete) {
        const findEmail = await this.prisma.memberEmail.findUnique({
            where: { id },
        });
        if (!findEmail) throw new NotFoundException('Email is not found');

        const deleteEmail = await this.prisma.memberEmail.delete({
            where: { id },
        });

        return deleteEmail;
    }

    //
    //  private
    //

    private async findMemberById(memberId: string) {
        const findMember = await this.prisma.member.findUnique({
            where: { id: memberId },
            include: { email: true },
        });
        if (!findMember) throw new NotFoundException('Member is not found');

        return findMember;
    }

    private checkEmailIsExist(emails: IEmail[], email: string) {
        const checkEmail = emails.some((obj) => obj.email === email.toLocaleLowerCase());
        if (checkEmail) throw new BadRequestException('Email is exist');
    }

    private checkMainEmailIsExist(emails: IEmail[]) {
        const mainIsExist = emails.some((obj) => obj.isMain === true);
        if (mainIsExist) throw new BadRequestException('The main mail is already set');
    }

    private checkEmailById(emails: IEmail[], id: string) {
        const mainIsExist = emails.some((obj) => obj.id === id);
        if (!mainIsExist) throw new NotFoundException('Email is not found');
    }
}

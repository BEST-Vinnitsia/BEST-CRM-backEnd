import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {
    IMember,
    IMemberCheckById,
    IMemberCheckEmail,
    IMemberCreate,
    IMemberCreateRes,
    IMemberDelete,
    IMemberGetId,
    IMemberGetIdRes,
    IMemberGetListRes,
    IMemberUpdate,
} from 'src/interfaces/member/member.type';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MemberService {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  GET  ---------------- */

    // get list
    public async getList(): Promise<IMemberGetListRes[]> {
        const memberList = await this.prisma.member.findMany();
        return memberList;
    }

    // get by id
    public async getById(data: IMemberGetId): Promise<IMemberGetIdRes> {
        const member = await this.prisma.member.findUnique({
            where: { id: data.id },
            include: { email: true, phone: true, socialNetwork: true },
        });
        if (!member) throw new NotFoundException('member not found');

        return member;
    }

    /* ----------------  POST  ---------------- */
    public async create(data: IMemberCreate): Promise<IMemberCreateRes> {
        // add check membership

        const hash = await bcrypt.hash(data.password, 10);

        const memberByEmail = await this.checkByEmail({ login: data.login });
        if (memberByEmail) throw new BadRequestException('member is exist');

        const memberNew = await this.prisma.member.create({
            data: {
                membership: data.membership,
                //
                login: data.login.toLocaleLowerCase(),
                password: hash,
                bestEmail: data.bestEmail ? data.bestEmail.toLocaleLowerCase() : null,
                //
                fullName: data.fullName.toLocaleLowerCase(),
                middleName: data.middleName.toLocaleLowerCase(),
                surname: data.surname.toLocaleLowerCase(),
                birthday: data.birthday,
                //
                faculty: data.faculty.toLocaleLowerCase(),
                group: data.group.toLocaleLowerCase(),
                //
                clothingSize: data.clothingSize ? data.clothingSize.toLocaleUpperCase() : null,
                homeAddress: data.homeAddress ? data.homeAddress.toLocaleLowerCase() : null,
            },
        });

        return memberNew;
    }

    /* ----------------  PUT  ---------------- */
    public async update(data: IMemberUpdate): Promise<IMember> {
        const memberById = await this.checkById({ id: data.id });
        if (!memberById) throw new NotFoundException('member not found');

        const memberUpdate = await this.prisma.member.update({
            where: { id: data.id },
            data: {
                membership: data.membership,
                //
                login: data.login.toLocaleLowerCase(),
                password: data.password,
                bestEmail: data.bestEmail ? data.bestEmail.toLocaleLowerCase() : null,
                //
                fullName: data.fullName.toLocaleLowerCase(),
                middleName: data.middleName.toLocaleLowerCase(),
                surname: data.surname.toLocaleLowerCase(),
                birthday: data.birthday,
                //
                faculty: data.faculty.toLocaleLowerCase(),
                group: data.group.toLocaleLowerCase(),
                //
                clothingSize: data.clothingSize ? data.clothingSize.toLocaleUpperCase() : null,
                homeAddress: data.homeAddress ? data.homeAddress.toLocaleLowerCase() : null,
            },
        });

        return memberUpdate;
    }

    /* ----------------  DELETE  ---------------- */
    public async deleteById(data: IMemberDelete): Promise<IMember> {
        const memberById = await this.checkById({ id: data.id });
        if (!memberById) throw new NotFoundException('member not found');

        const memberDelete = await this.prisma.member.delete({ where: { id: data.id } });
        return memberDelete;
    }

    //
    //
    //

    // check by id
    private async checkById({ id }: IMemberCheckById): Promise<IMember> {
        const member = await this.prisma.member.findUnique({ where: { id } });
        return member;
    }

    // check by email
    private async checkByEmail({ login }: IMemberCheckEmail): Promise<IMember> {
        const member = await this.prisma.member.findUnique({ where: { login } });
        return member;
    }
}

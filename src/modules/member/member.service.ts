import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {
    IMember,
    IMemberCreate,
    IMemberCreateRes,
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
    public async create(dto: IMemberCreate): Promise<IMemberCreateRes> {
        // add check membership

        const hash = await bcrypt.hash(dto.password, 10);

        const memberByEmail = await this.prisma.member.findUnique({ where: { login: dto.login } });
        if (memberByEmail) throw new BadRequestException('member is exist');

        const memberNew = await this.prisma.member.create({
            data: {
                membership: dto.membership,
                //
                login: dto.login.toLocaleLowerCase(),
                password: hash,
                bestEmail: dto.bestEmail ? dto.bestEmail.toLocaleLowerCase() : null,
                //
                fullName: dto.fullName.toLocaleLowerCase(),
                middleName: dto.middleName.toLocaleLowerCase(),
                surname: dto.surname.toLocaleLowerCase(),
                birthday: dto.birthday,
                //
                faculty: dto.faculty.toLocaleLowerCase(),
                group: dto.group.toLocaleLowerCase(),
                //
                clothingSize: dto.clothingSize ? dto.clothingSize.toLocaleUpperCase() : null,
                homeAddress: dto.homeAddress ? dto.homeAddress.toLocaleLowerCase() : null,
            },
        });

        return memberNew;
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IMemberUpdate): Promise<IMember> {
        const memberById = await this.prisma.member.findUnique({ where: { id: dto.id } });
        if (!memberById) throw new NotFoundException('member not found');

        const memberUpdate = await this.prisma.member.update({
            where: { id: dto.id },
            data: {
                membership: dto.membership,
                //
                login: dto.login.toLocaleLowerCase(),
                password: dto.password,
                bestEmail: dto.bestEmail ? dto.bestEmail.toLocaleLowerCase() : null,
                //
                fullName: dto.fullName.toLocaleLowerCase(),
                middleName: dto.middleName.toLocaleLowerCase(),
                surname: dto.surname.toLocaleLowerCase(),
                birthday: dto.birthday,
                //
                faculty: dto.faculty.toLocaleLowerCase(),
                group: dto.group.toLocaleLowerCase(),
                //
                clothingSize: dto.clothingSize ? dto.clothingSize.toLocaleUpperCase() : null,
                homeAddress: dto.homeAddress ? dto.homeAddress.toLocaleLowerCase() : null,
            },
        });

        return memberUpdate;
    }

    /* ----------------  DELETE  ---------------- */
    public async deleteArray(dto: string[]) {
        const deleteRes = await this.prisma.member.deleteMany({
            where: { id: { in: dto } },
        });

        return deleteRes;
    }
}

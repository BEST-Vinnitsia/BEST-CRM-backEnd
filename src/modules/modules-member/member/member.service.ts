import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {
    IMember,
    IMemberCreate,
    IMemberCreateRes,
    IMemberGetId,
    IMemberGetIdRes,
    IMemberGetListRes,
    IMemberUpdate,
    IMemberUpdateMembership,
} from 'src/interfaces/member/member.type';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class MemberService {
    errorMessages = {
        NOT_FOUND: 'Member is not found',
        IS_EXIST: 'Member is exist',
    };

    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  GET  ---------------- */

    public async getList(): Promise<IMemberGetListRes[]> {
        return this.prisma.member.findMany();
    }

    public async getById(dto: IMemberGetId): Promise<IMemberGetIdRes> {
        const member = await this.prisma.member.findUnique({
            where: { id: dto.id },
        });
        if (!member) throw new NotFoundException(this.errorMessages.NOT_FOUND);

        return member;
    }

    public async getByIdNoHaveError(dto: IMemberGetId): Promise<IMemberGetIdRes> {
        return this.prisma.member.findUnique({
            where: { id: dto.id },
        });
    }

    public async getByLogin({ login }: { login: string }): Promise<IMemberGetIdRes> {
        const member = await this.prisma.member.findUnique({
            where: { login: login },
        });
        if (!member) throw new NotFoundException(this.errorMessages.NOT_FOUND);

        return member;
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: IMemberCreate): Promise<IMemberCreateRes> {
        const member = await this.prisma.member.findUnique({
            where: { login: dto.login },
        });
        if (member) throw new BadRequestException(this.errorMessages.IS_EXIST);

        const hash = await bcrypt.hash(dto.password, 12);

        return this.prisma.member.create({
            data: {
                membership: dto.membership,

                login: dto.login.toLocaleLowerCase(),
                password: hash,
                bestEmail: dto.bestEmail ? dto.bestEmail.toLocaleLowerCase() : null,

                name: dto.name,
                middleName: dto.middleName,
                surname: dto.surname,
                birthday: dto.birthday,

                faculty: dto.faculty,
                group: dto.group,

                clothingSize: dto.clothingSize ? dto.clothingSize.toLocaleUpperCase() : null,
                homeAddress: dto.homeAddress ? dto.homeAddress.toLocaleLowerCase() : null,
            },
        });
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IMemberUpdate): Promise<IMember> {
        const member = await this.prisma.member.findUnique({
            where: { id: dto.id },
        });
        if (!member) throw new NotFoundException(this.errorMessages.NOT_FOUND);

        return this.prisma.member.update({
            where: { id: dto.id },
            data: {
                membership: dto.membership,
                bestEmail: dto.bestEmail ? dto.bestEmail.toLocaleLowerCase() : null,

                name: dto.name,
                surname: dto.surname,
                middleName: dto.middleName,
                birthday: dto.birthday,

                faculty: dto.faculty,
                group: dto.group,

                clothingSize: dto.clothingSize ? dto.clothingSize.toLocaleUpperCase() : null,
                homeAddress: dto.homeAddress ? dto.homeAddress.toLocaleLowerCase() : null,
            },
        });
    }

    public async updateMembership({ id, membership }: IMemberUpdateMembership): Promise<IMember> {
        const member = await this.prisma.member.findUnique({
            where: { id },
        });
        if (!member) throw new NotFoundException(this.errorMessages.NOT_FOUND);

        const updateMembership = await this.prisma.member.update({
            where: { id },
            data: { membership },
        });
        if (!updateMembership) throw new InternalServerErrorException();

        return updateMembership;
    }

    /* ----------------  DELETE  ---------------- */
    public async deleteArray(dto: string[]) {
        return this.prisma.member.deleteMany({
            where: { id: { in: dto } },
        });
    }
}

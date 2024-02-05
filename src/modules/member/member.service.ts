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

        return this.prisma.member.create(this.memberQuery(dto, hash));
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IMemberUpdate): Promise<IMember> {
        const member = await this.prisma.member.findUnique({
            where: { id: dto.id },
        });
        if (!member) throw new NotFoundException(this.errorMessages.NOT_FOUND);

        return this.prisma.member.update(this.memberQuery(dto));
    }

    /* ----------------  DELETE  ---------------- */
    public async deleteArray(dto: string[]) {
        return this.prisma.member.deleteMany({
            where: { id: { in: dto } },
        });
    }

    //
    //
    //

    private memberQuery(dto: IMemberCreate | IMemberUpdate, passwordHash?: string) {
        if ('id' in dto) {
            const query: any = {
                where: { id: dto.id },
                data: {
                    membership: dto.membership,

                    login: dto.login.toLocaleLowerCase(),
                    // password: passwordHash,
                    bestEmail: dto.bestEmail ? dto.bestEmail.toLocaleLowerCase() : null,

                    fullName: dto.fullName.toLocaleLowerCase(),
                    middleName: dto.middleName.toLocaleLowerCase(),
                    surname: dto.surname.toLocaleLowerCase(),
                    birthday: dto.birthday,

                    faculty: dto.faculty.toLocaleLowerCase(),
                    group: dto.group.toLocaleLowerCase(),

                    clothingSize: dto.clothingSize ? dto.clothingSize.toLocaleUpperCase() : null,
                    homeAddress: dto.homeAddress ? dto.homeAddress.toLocaleLowerCase() : null,
                },
            };
            return query;
        }

        return {
            data: {
                membership: dto.membership,

                login: dto.login.toLocaleLowerCase(),
                password: passwordHash,
                bestEmail: dto.bestEmail ? dto.bestEmail.toLocaleLowerCase() : null,

                fullName: dto.fullName.toLocaleLowerCase(),
                middleName: dto.middleName.toLocaleLowerCase(),
                surname: dto.surname.toLocaleLowerCase(),
                birthday: dto.birthday,

                faculty: dto.faculty.toLocaleLowerCase(),
                group: dto.group.toLocaleLowerCase(),

                clothingSize: dto.clothingSize ? dto.clothingSize.toLocaleUpperCase() : null,
                homeAddress: dto.homeAddress ? dto.homeAddress.toLocaleLowerCase() : null,
            },
        };
    }
}

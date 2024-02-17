import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service';
import { ICreateRes, IDeleteArrayRes, IDeleteRes, IGetByIdRes, IGetListRes, IUpdateRes } from './interfaces/res.interface';
import { IGetByLoginReq, IGetByLoginRes, IUpdateMembershipReq } from './interfaces/other-methods.interface';
import { ICreateReq, IDeleteReq, IGetByIdReq, IUpdateReq } from './interfaces/req.interface';

interface IMemberService {
    getList(): Promise<IGetListRes[]>;

    getById(dto: IGetByIdReq): Promise<IGetByIdRes>;

    create(dto: ICreateReq): Promise<ICreateRes>;

    update(dto: IUpdateReq): Promise<IUpdateRes>;

    deleteById(dto: IDeleteReq): Promise<IDeleteRes>;

    deleteArray(dto: number[]): Promise<IDeleteArrayRes>;

    // other
    getByLogin(dto: IGetByLoginReq): Promise<IGetByLoginRes>;

    updateMembership(dto: IUpdateMembershipReq): Promise<void>;
}

@Injectable()
export class MemberService implements IMemberService {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  GET  ---------------- */

    public async getList(): Promise<IGetListRes[]> {
        return this.prisma.member.findMany({
            select: {
                id: true,
                membership: true,
                name: true,
                surname: true,
                middleName: true,
                bestEmail: true,
                phone: true,
                email: true,
                socialNetwork: true,
                faculty: true,
                group: true,
                birthday: true,
            },
        });
    }

    public async getById(dto: IGetByIdReq): Promise<IGetByIdRes> {
        const member = await this.prisma.member.findUnique({
            where: { id: dto.id },
            select: {
                id: true,
                membership: true,
                name: true,
                surname: true,
                middleName: true,
                bestEmail: true,
                phone: true,
                email: true,
                socialNetwork: true,
                faculty: true,
                group: true,
                homeAddress: true,
                clothingSize: true,
                birthday: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        if (!member) throw new NotFoundException('Member is not found');

        return member;
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: ICreateReq): Promise<ICreateRes> {
        const member = await this.prisma.member.findUnique({ where: { login: dto.login } });
        if (member) throw new BadRequestException('Member is exist');

        const hash = await bcrypt.hash(dto.password, 12);

        const newMember = await this.prisma.member.create({
            data: {
                membership: dto.membership,
                login: dto.login.toLocaleLowerCase(),
                password: hash,
                bestEmail: dto.bestEmail ? dto.bestEmail.toLocaleLowerCase() : null,
                phone: dto.phone,
                email: dto.email,
                socialNetwork: dto.socialNetwork,
                name: dto.name,
                middleName: dto.middleName,
                surname: dto.surname,
                birthday: dto.birthday,
                faculty: dto.faculty,
                group: dto.group,
                clothingSize: dto.clothingSize ? dto.clothingSize.toLocaleUpperCase() : null,
                homeAddress: dto.homeAddress ? dto.homeAddress : null,
            },
        });

        return { id: newMember.id };
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IUpdateReq): Promise<IUpdateRes> {
        const member = await this.prisma.member.findUnique({ where: { id: dto.id } });
        if (!member) throw new NotFoundException('Member is not found');

        const updateMember = await this.prisma.member.update({
            where: { id: dto.id },
            data: {
                membership: dto.membership,
                bestEmail: dto.bestEmail ? dto.bestEmail.toLocaleLowerCase() : null,
                phone: dto.phone,
                email: dto.email,
                socialNetwork: dto.socialNetwork,
                name: dto.name,
                surname: dto.surname,
                middleName: dto.middleName,
                birthday: dto.birthday,
                faculty: dto.faculty,
                group: dto.group,
                clothingSize: dto.clothingSize ? dto.clothingSize.toLocaleUpperCase() : null,
                homeAddress: dto.homeAddress ? dto.homeAddress : null,
            },
        });

        return { id: updateMember.id };
    }

    /* ----------------  DELETE  ---------------- */
    public async deleteById(dto: IDeleteReq): Promise<IDeleteRes> {
        const member = await this.prisma.member.findUnique({ where: { id: dto.id } });
        if (!member) throw new NotFoundException('Member is not found');

        try {
            const deleteMember = await this.prisma.member.delete({ where: { id: dto.id } });
            return { id: deleteMember.id };
        } catch (err) {
            throw new InternalServerErrorException('Error delete member');
        }
    }

    public async deleteArray(dto: number[]): Promise<IDeleteArrayRes> {
        try {
            return this.prisma.member.deleteMany({ where: { id: { in: dto } } });
        } catch (err) {
            throw new InternalServerErrorException('Error delete all members');
        }
    }

    /* ----------------  OTHER  ---------------- */

    public async getByLogin(dto: IGetByLoginReq): Promise<IGetByLoginRes> {
        const member = await this.prisma.member.findUnique({
            where: { login: dto.login },
            select: { login: true, password: true },
        });
        if (!member) throw new NotFoundException('Member is not found');

        return member;
    }

    public async updateMembership(dto: IUpdateMembershipReq): Promise<void> {
        const member = await this.prisma.member.findUnique({ where: { id: dto.id } });
        if (!member) throw new NotFoundException('Member is not found');

        const updateMembership = await this.prisma.member.update({
            where: { id: dto.id },
            data: { membership: dto.membership },
        });
        if (!updateMembership) throw new InternalServerErrorException();
    }
}

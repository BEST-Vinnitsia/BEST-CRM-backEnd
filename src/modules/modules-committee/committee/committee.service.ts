import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ICreateRes, IDeleteArrayRes, IDeleteRes, IGetByIdRes, IGetListRes, IUpdateRes } from './interfaces/res.interface';
import { ICreateReq, IDeleteReq, IGetByIdReq, IUpdateReq } from './interfaces/req.interface';

interface ICommitteeService {
    getList(): Promise<IGetListRes[]>;

    getById(dto: IGetByIdReq): Promise<IGetByIdRes>;

    create(dto: ICreateReq): Promise<ICreateRes>;

    update(dto: IUpdateReq): Promise<IUpdateRes>;

    deleteById(dto: IDeleteReq): Promise<IDeleteRes>;

    deleteArray(dto: number[]): Promise<IDeleteArrayRes>;
}

@Injectable()
export class CommitteeService implements ICommitteeService {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  GET  ---------------- */
    public async getList(): Promise<IGetListRes[]> {
        return this.prisma.committee.findMany({ select: { id: true, isActive: true, name: true, fullName: true } });
    }

    public async getById(dto: IGetByIdReq): Promise<IGetByIdRes> {
        const committee = await this.prisma.committee.findUnique({ where: { id: dto.id } });
        if (!committee) throw new NotFoundException('Committee not found');

        return committee;
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: ICreateReq): Promise<ICreateRes> {
        const committeeByName = await this.prisma.committee.findUnique({ where: { name: dto.name } });
        if (committeeByName) throw new BadRequestException('Committee with this name is exist');

        const committeeByFullName = await this.prisma.committee.findUnique({ where: { fullName: dto.fullName } });
        if (committeeByFullName) throw new BadRequestException('Committee with this full name is exist');

        const committeeCreate = await this.prisma.committee.create({
            data: { name: dto.name, fullName: dto.fullName, isActive: dto.isActive },
        });

        return { id: committeeCreate.id };
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IUpdateReq): Promise<IUpdateRes> {
        const committeeById = await this.prisma.committee.findUnique({ where: { id: dto.id } });
        if (!committeeById) throw new NotFoundException('Committee is not found');

        const committeeByName = await this.prisma.committee.findUnique({ where: { name: dto.name } });
        if (committeeByName) throw new BadRequestException('Committee with this name is exist');

        const committeeByFullName = await this.prisma.committee.findUnique({ where: { fullName: dto.fullName } });
        if (committeeByFullName) throw new BadRequestException('Committee with this full name is exist');

        const committeeUpdate = await this.prisma.committee.update({
            where: { id: dto.id },
            data: { name: dto.name, fullName: dto.fullName, isActive: dto.isActive },
        });

        return { id: committeeUpdate.id };
    }

    /* ----------------  DELETE  ---------------- */
    public async deleteById(dto: IDeleteReq): Promise<IDeleteRes> {
        const committee = await this.prisma.committee.findUnique({ where: { id: dto.id } });
        if (!committee) throw new NotFoundException('Committee is not found');

        try {
            const deleteCommittee = await this.prisma.committee.delete({ where: { id: dto.id } });
            return { id: deleteCommittee.id };
        } catch (err) {
            throw new InternalServerErrorException('Error delete committee');
        }
    }

    public async deleteArray(dto: number[]): Promise<IDeleteArrayRes> {
        try {
            return this.prisma.committee.deleteMany({ where: { id: { in: dto } } });
        } catch (err) {
            throw new InternalServerErrorException('Error delete all committees');
        }
    }
}

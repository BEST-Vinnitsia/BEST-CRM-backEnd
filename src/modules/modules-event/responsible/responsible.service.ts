import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ICreateRes, IDeleteArrayRes, IDeleteRes, IGetByEventIdRes, IGetByIdRes, IGetListRes, IUpdateRes } from './interfaces/res.interface';
import { ICreateReq, IDeleteReq, IGetByEventIdReq, IGetByIdReq, IUpdateReq } from './interfaces/req.interface';

interface IResponsibleService {
    getList(): Promise<IGetListRes[]>;

    getById(dto: IGetByIdReq): Promise<IGetByIdRes>;

    getByEventId(dto: IGetByEventIdReq): Promise<IGetByEventIdRes[]>;

    create(dto: ICreateReq): Promise<ICreateRes>;

    update(dto: IUpdateReq): Promise<IUpdateRes>;

    deleteById(dto: IDeleteReq): Promise<IDeleteRes>;

    deleteArray(dto: number[]): Promise<IDeleteArrayRes>;
}

@Injectable()
export class ResponsibleService implements IResponsibleService {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  GET  ---------------- */
    public async getList(): Promise<IGetListRes[]> {
        return this.prisma.responsible.findMany({
            select: {
                id: true,
                isActive: true,
                name: true,
                fullName: true,
                role: true,
                description: true,
                eventId: true,
            },
        });
    }

    public async getById(dto: IGetByIdReq): Promise<IGetByIdRes> {
        const responsible = await this.prisma.responsible.findUnique({ where: { id: dto.id } });
        if (!responsible) throw new NotFoundException('Responsible not found');

        return responsible;
    }

    public async getByEventId(dto: IGetByEventIdReq): Promise<IGetByEventIdRes[]> {
        return this.prisma.responsible.findMany({ where: { eventId: dto.eventId } });
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: ICreateReq): Promise<ICreateRes> {
        const responsible = await this.prisma.responsible.findFirst({
            where: { eventId: dto.eventId, name: dto.name, role: dto.role },
        });
        if (responsible) throw new BadRequestException('Responsible with this params is exist');

        const responsibleCreate = await this.prisma.responsible.create({
            data: {
                eventId: dto.eventId,
                name: dto.name,
                fullName: dto.fullName,
                isActive: dto.isActive,
                role: dto.role,
                description: dto.description,
            },
        });

        return { id: responsibleCreate.id };
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IUpdateReq): Promise<IUpdateRes> {
        const responsibleById = await this.prisma.responsible.findUnique({ where: { id: dto.id } });
        if (!responsibleById) throw new NotFoundException('Responsible is not found');

        const responsibleUpdate = await this.prisma.responsible.update({
            where: { id: dto.id },
            data: {
                eventId: dto.eventId,
                name: dto.name,
                fullName: dto.fullName,
                isActive: dto.isActive,
                role: dto.role,
                description: dto.description,
            },
        });

        return { id: responsibleUpdate.id };
    }

    /* ----------------  DELETE  ---------------- */
    public async deleteById(dto: IDeleteReq): Promise<IDeleteRes> {
        const responsible = await this.prisma.responsible.findUnique({ where: { id: dto.id } });
        if (!responsible) throw new NotFoundException('Responsible is not found');

        try {
            const deleteResponsible = await this.prisma.responsible.delete({ where: { id: dto.id } });
            return { id: deleteResponsible.id };
        } catch (err) {
            throw new InternalServerErrorException('Error delete responsible');
        }
    }

    public async deleteArray(dto: number[]): Promise<IDeleteArrayRes> {
        try {
            return this.prisma.responsible.deleteMany({ where: { id: { in: dto } } });
        } catch (err) {
            throw new InternalServerErrorException('Error delete all responsibles');
        }
    }
}

import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ICreateRes, IDeleteArrayRes, IDeleteRes, IGetByIdRes, IGetListRes, IUpdateRes } from './interfaces/res.interface';
import { ICreateReq, IDeleteReq, IGetByIdReq, IUpdateReq } from './interfaces/req.interface';

interface IEventService {
    getList(): Promise<IGetListRes[]>;

    getById(dto: IGetByIdReq): Promise<IGetByIdRes>;

    create(dto: ICreateReq): Promise<ICreateRes>;

    update(dto: IUpdateReq): Promise<IUpdateRes>;

    deleteById(dto: IDeleteReq): Promise<IDeleteRes>;

    deleteArray(dto: number[]): Promise<IDeleteArrayRes>;
}

@Injectable()
export class EventService implements IEventService {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  GET  ---------------- */
    public async getList(): Promise<IGetListRes[]> {
        return this.prisma.event.findMany({ select: { id: true, isActive: true, name: true, fullName: true } });
    }

    public async getById(dto: IGetByIdReq): Promise<IGetByIdRes> {
        const coordinator = await this.prisma.event.findUnique({ where: { id: dto.id } });
        if (!coordinator) throw new NotFoundException('Event not found');

        return coordinator;
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: ICreateReq): Promise<ICreateRes> {
        const eventByName = await this.prisma.event.findUnique({ where: { name: dto.name } });
        if (eventByName) throw new BadRequestException('Event with this name is exist');

        const eventByFullName = await this.prisma.event.findUnique({ where: { fullName: dto.fullName } });
        if (eventByFullName) throw new BadRequestException('Event with this full name is exist');

        const eventCreate = await this.prisma.event.create({
            data: { name: dto.name, fullName: dto.fullName, isActive: dto.isActive },
        });

        return { id: eventCreate.id };
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IUpdateReq): Promise<IUpdateRes> {
        const eventById = await this.prisma.event.findUnique({ where: { id: dto.id } });
        if (!eventById) throw new NotFoundException('Event is not found');

        const eventByName = await this.prisma.event.findUnique({ where: { name: dto.name } });
        if (eventByName) throw new BadRequestException('Event with this name is exist');

        const eventByFullName = await this.prisma.event.findUnique({ where: { fullName: dto.fullName } });
        if (eventByFullName) throw new BadRequestException('Event with this full name is exist');

        const eventUpdate = await this.prisma.event.update({
            where: { id: dto.id },
            data: { name: dto.name, fullName: dto.fullName, isActive: dto.isActive },
        });

        return { id: eventUpdate.id };
    }

    /* ----------------  DELETE  ---------------- */
    public async deleteById(dto: IDeleteReq): Promise<IDeleteRes> {
        const event = await this.prisma.event.findUnique({ where: { id: dto.id } });
        if (!event) throw new NotFoundException('Event is not found');

        try {
            const deleteEvent = await this.prisma.event.delete({ where: { id: dto.id } });
            return { id: deleteEvent.id };
        } catch (err) {
            throw new InternalServerErrorException('Error delete event');
        }
    }

    public async deleteArray(dto: number[]): Promise<IDeleteArrayRes> {
        try {
            return this.prisma.event.deleteMany({ where: { id: { in: dto } } });
        } catch (err) {
            throw new InternalServerErrorException('Error delete all events');
        }
    }
}

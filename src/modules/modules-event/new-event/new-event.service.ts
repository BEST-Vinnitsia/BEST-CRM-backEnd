import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
    ICreateRes,
    IDeleteArrayRes,
    IDeleteRes,
    IGetByCadenceIdRes,
    IGetByEventIdRes,
    IGetByIdRes,
    IGetListRes,
    IUpdateRes,
} from './interfaces/res.interface';
import { ICreateReq, IDeleteReq, IGetByCadenceIdReq, IGetByEventIdReq, IGetByIdReq, IUpdateReq } from './interfaces/req.interface';
import { EventService } from '../event/event.service';

interface IResponsibleService {
    getList(): Promise<IGetListRes[]>;

    getById(dto: IGetByIdReq): Promise<IGetByIdRes>;

    getByCadenceId(dto: IGetByCadenceIdReq): Promise<IGetByCadenceIdRes[]>;

    getByEventId(dto: IGetByEventIdReq): Promise<IGetByEventIdRes[]>;

    create(dto: ICreateReq): Promise<ICreateRes>;

    update(dto: IUpdateReq): Promise<IUpdateRes>;

    deleteById(dto: IDeleteReq): Promise<IDeleteRes>;

    deleteArray(dto: number[]): Promise<IDeleteArrayRes>;
}

@Injectable()
export class NewEventService implements IResponsibleService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly eventService: EventService,
    ) {}

    /* ----------------  GET  ---------------- */
    public async getList(): Promise<IGetListRes[]> {
        return this.prisma.newEvent.findMany({
            select: { id: true, name: true, eventId: true, cadenceId: true },
        });
    }

    public async getById(dto: IGetByIdReq): Promise<IGetByIdRes> {
        const newEvent = await this.prisma.newEvent.findUnique({ where: { id: parseInt(dto.id) } });
        if (!newEvent) throw new NotFoundException('New event not found');

        return newEvent;
    }

    public async checkById({ id }: { id: number }): Promise<IGetByIdRes> {
        const newEvent = await this.prisma.newEvent.findUnique({ where: { id } });
        if (!newEvent) throw new NotFoundException('New event not found');

        return newEvent;
    }

    public async getByCadenceId(dto: IGetByCadenceIdReq): Promise<IGetByCadenceIdRes[]> {
        return this.prisma.newEvent.findMany({ where: { cadenceId: parseInt(dto.cadenceId) } });
    }

    public async getByEventId(dto: IGetByEventIdReq): Promise<IGetByEventIdRes[]> {
        return this.prisma.newEvent.findMany({ where: { eventId: parseInt(dto.eventId) } });
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: ICreateReq): Promise<ICreateRes> {
        const newEvent = await this.prisma.newEvent.findFirst({
            where: { eventId: dto.eventId, cadenceId: dto.cadenceId, name: dto.name },
        });
        if (newEvent) throw new BadRequestException('New event is exist');

        await this.eventService.checkById({ id: dto.eventId });

        const createNewEvent = await this.prisma.newEvent.create({
            data: { eventId: dto.eventId, cadenceId: dto.cadenceId, name: dto.name },
        });

        return { id: createNewEvent.id };
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IUpdateReq): Promise<IUpdateRes> {
        const newEvent = await this.prisma.newEvent.findUnique({ where: { id: dto.id } });
        if (!newEvent) throw new NotFoundException('New event is not exist');

        await this.eventService.checkById({ id: dto.eventId });

        const updateNewEvent = await this.prisma.newEvent.update({
            where: { id: dto.id },
            data: { eventId: dto.eventId, cadenceId: dto.cadenceId, name: dto.name },
        });

        return { id: updateNewEvent.id };
    }

    /* ----------------  DELETE  ---------------- */
    public async deleteById(dto: IDeleteReq): Promise<IDeleteRes> {
        const newEvent = await this.prisma.newEvent.findUnique({ where: { id: parseInt(dto.id) } });
        if (!newEvent) throw new NotFoundException('New event is not found');

        try {
            const deleteNewEvent = await this.prisma.newEvent.delete({ where: { id: parseInt(dto.id) } });
            return { id: deleteNewEvent.id };
        } catch (err) {
            throw new InternalServerErrorException('Error delete new event');
        }
    }

    public async deleteArray(dto: number[]): Promise<IDeleteArrayRes> {
        try {
            return this.prisma.newEvent.deleteMany({ where: { id: { in: dto } } });
        } catch (err) {
            throw new InternalServerErrorException('Error delete all new events');
        }
    }
}

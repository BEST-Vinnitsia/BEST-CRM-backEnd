import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {
    INewEvent,
    INewEventCreate,
    INewEventGetByCadenceId,
    INewEventGetByEventId,
    INewEventGetById,
    INewEventUpdate,
} from 'src/interfaces/event/new-event.interface';
import { PrismaService } from '../prisma/prisma.service';
import { CadenceService } from '../cadence/cadence.service';
import { EventService } from '../event/event.service';

@Injectable()
export class NewEventService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly cadenceService: CadenceService,
        private readonly eventService: EventService,
    ) {}

    /* ----------------  GET  ---------------- */
    public async getList(): Promise<INewEvent[]> {
        return this.prisma.newEvent.findMany();
    }

    public async getById(dto: INewEventGetById): Promise<INewEvent> {
        const newEvent = await this.prisma.newEvent.findUnique({
            where: { id: dto.id },
        });
        if (!newEvent) throw new NotFoundException('new event not found');

        return newEvent;
    }

    public async getByCadenceId(dto: INewEventGetByCadenceId): Promise<INewEvent[]> {
        return this.prisma.newEvent.findMany({
            where: { cadenceId: dto.cadenceId },
        });
    }

    public async getByEventId(dto: INewEventGetByEventId): Promise<INewEvent[]> {
        return this.prisma.newEvent.findMany({
            where: { eventId: dto.eventId },
        });
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: INewEventCreate): Promise<INewEvent> {
        const newEvent = await this.prisma.newEvent.findFirst({
            where: {
                eventId: dto.eventId,
                cadenceId: dto.cadenceId,
            },
        });
        if (newEvent) throw new BadRequestException('new event is exist');

        await this.eventService.getById({ id: dto.eventId });
        await this.cadenceService.getById({ id: dto.cadenceId });

        return this.prisma.newEvent.create({
            data: {
                eventId: dto.eventId,
                cadenceId: dto.cadenceId,
            },
        });
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: INewEventUpdate): Promise<INewEvent> {
        const newEvent = await this.prisma.newEvent.findUnique({
            where: { id: dto.id },
        });
        if (!newEvent) throw new NotFoundException('new event is not exist');

        await this.eventService.getById({ id: dto.eventId });
        await this.cadenceService.getById({ id: dto.cadenceId });

        return this.prisma.newEvent.update({
            where: { id: dto.id },
            data: {
                eventId: dto.eventId,
                cadenceId: dto.cadenceId,
            },
        });
    }

    /* ----------------  DELETE  ---------------- */
    public async delete(dto: string[]) {
        return this.prisma.newEvent.deleteMany({
            where: { id: { in: dto } },
        });
    }
}

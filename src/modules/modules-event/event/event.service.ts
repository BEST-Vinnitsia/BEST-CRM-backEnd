import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { IEvent, IEventCreate, IEventGetById, IEventUpdate } from 'src/interfaces/event/event.interface';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class EventService {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  GET  ---------------- */
    public async getList(): Promise<IEvent[]> {
        return this.prisma.event.findMany();
    }

    public async getById(dto: IEventGetById): Promise<IEvent> {
        const event = await this.prisma.event.findUnique({
            where: { id: dto.id },
        });
        if (!event) throw new NotFoundException('event not found');

        return event;
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: IEventCreate): Promise<IEvent> {
        const event = await this.prisma.event.findFirst({
            where: { name: dto.name },
        });
        if (event) throw new BadRequestException('event is exist');

        return this.prisma.event.create({
            data: {
                name: dto.name.toLocaleLowerCase(),
                isActive: dto.isActive,
            },
        });
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IEventUpdate): Promise<IEvent> {
        const event = await this.prisma.event.findUnique({
            where: { id: dto.id },
        });
        if (!event) throw new NotFoundException('event is not exist');

        return this.prisma.event.update({
            where: { id: dto.id },
            data: {
                isActive: dto.isActive,
            },
        });
    }

    /* ----------------  DELETE  ---------------- */
    public async delete(dto: string[]) {
        return this.prisma.event.deleteMany({
            where: { id: { in: dto } },
        });
    }
}

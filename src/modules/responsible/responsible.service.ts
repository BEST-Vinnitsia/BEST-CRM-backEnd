import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {
    IResponsible,
    IResponsibleCreate,
    IResponsibleGetByEventId,
    IResponsibleGetById,
    IResponsibleUpdate,
} from 'src/interfaces/event/responsible.interface';
import { PrismaService } from '../prisma/prisma.service';
import { EventService } from '../event/event.service';

@Injectable()
export class ResponsibleService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly eventService: EventService,
    ) {}

    /* ----------------  GET  ---------------- */
    public async getList(): Promise<IResponsible[]> {
        return this.prisma.responsible.findMany();
    }

    public async getById(dto: IResponsibleGetById): Promise<IResponsible> {
        const responsible = await this.prisma.responsible.findUnique({
            where: { id: dto.id },
        });
        if (!responsible) throw new NotFoundException('responsible not found');

        return responsible;
    }

    public async getByEventId(dto: IResponsibleGetByEventId): Promise<IResponsible[]> {
        return this.prisma.responsible.findMany({
            where: { eventId: dto.eventId },
        });
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: IResponsibleCreate): Promise<IResponsible> {
        const responsible = await this.prisma.responsible.findFirst({
            where: {
                eventId: dto.eventId,
                name: dto.name.toLocaleLowerCase(),
                role: dto.role.toLocaleLowerCase(),
            },
        });
        if (responsible) throw new BadRequestException('responsible is exist');

        await this.eventService.getById({ id: dto.eventId });

        return this.prisma.responsible.create({
            data: {
                eventId: dto.eventId,
                name: dto.name.toLocaleLowerCase(),
                isActive: dto.isActive,
                role: dto.role.toLocaleLowerCase(),
                description: dto.description,
            },
        });
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IResponsibleUpdate): Promise<IResponsible> {
        const responsible = await this.prisma.responsible.findUnique({
            where: { id: dto.id },
        });
        if (!responsible) throw new NotFoundException('responsible is not exist');

        await this.eventService.getById({ id: dto.eventId });

        return this.prisma.responsible.update({
            where: { id: dto.id },
            data: {
                eventId: dto.eventId,
                name: dto.name.toLocaleLowerCase(),
                isActive: dto.isActive,
                role: dto.role.toLocaleLowerCase(),
                description: dto.description,
            },
        });
    }

    /* ----------------  DELETE  ---------------- */
    public async delete(dto: string[]) {
        return this.prisma.responsible.deleteMany({
            where: { id: { in: dto } },
        });
    }
}

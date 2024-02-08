import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {
    IMemberToEvent,
    IMemberToEventCreate,
    IMemberToEventGetByNewEventId,
    IMemberToEventGetByResponsibleId,
    IMemberToEventGetByMemberId,
    IMemberToEventGetById,
    IMemberToEventUpdate,
} from 'src/interfaces/event/member-to-event.interface';
import { PrismaService } from '../../prisma/prisma.service';
import { NewEventService } from '../../new-event/new-event.service';
import { MemberService } from '../../member/member.service';
import { ResponsibleService } from '../../responsible/responsible.service';

@Injectable()
export class MemberToEventService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly newEventService: NewEventService,
        private readonly memberService: MemberService,
        private readonly responsibleService: ResponsibleService,
    ) {}

    /* ----------------  GET  ---------------- */
    public async getList(): Promise<IMemberToEvent[]> {
        return this.prisma.memberToEvent.findMany();
    }

    public async getById(dto: IMemberToEventGetById): Promise<IMemberToEvent> {
        const responsible = await this.prisma.memberToEvent.findUnique({
            where: { id: dto.id },
        });
        if (!responsible) throw new NotFoundException('member to event not found');

        return responsible;
    }

    public async getByNewEventId(dto: IMemberToEventGetByNewEventId): Promise<IMemberToEvent[]> {
        return this.prisma.memberToEvent.findMany({
            where: { newEventId: dto.newEventId },
        });
    }

    public async getByResponsibleId(dto: IMemberToEventGetByResponsibleId): Promise<IMemberToEvent[]> {
        return this.prisma.memberToEvent.findMany({
            where: { responsibleId: dto.responsibleId },
        });
    }

    public async getByMemberId(dto: IMemberToEventGetByMemberId): Promise<IMemberToEvent[]> {
        return this.prisma.memberToEvent.findMany({
            where: { memberId: dto.memberId },
        });
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: IMemberToEventCreate): Promise<IMemberToEvent> {
        const responsible = await this.prisma.memberToEvent.findFirst({
            where: {
                memberId: dto.memberId,
                responsibleId: dto.responsibleId,
                newEventId: dto.newEventId,
            },
        });
        if (responsible) throw new BadRequestException('member to event is exist');

        await this.newEventService.getById({ id: dto.newEventId });
        await this.responsibleService.getById({ id: dto.responsibleId });
        await this.memberService.getById({ id: dto.memberId });

        return this.prisma.memberToEvent.create({
            data: {
                newEventId: dto.newEventId,
                memberId: dto.memberId,
                responsibleId: dto.responsibleId,
                excluded: dto.excluded,
                excludedDate: dto.excludedDate ? dto.excludedDate : null,
            },
        });
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IMemberToEventUpdate): Promise<IMemberToEvent> {
        const responsible = await this.prisma.memberToEvent.findUnique({
            where: { id: dto.id },
        });
        if (!responsible) throw new NotFoundException('member to event is not exist');

        await this.newEventService.getById({ id: dto.newEventId });
        await this.responsibleService.getById({ id: dto.responsibleId });
        await this.memberService.getById({ id: dto.memberId });

        return this.prisma.memberToEvent.update({
            where: { id: dto.id },
            data: {
                newEventId: dto.newEventId,
                memberId: dto.memberId,
                responsibleId: dto.responsibleId,
                excluded: dto.excluded,
                excludedDate: dto.excludedDate ? dto.excludedDate : null,
            },
        });
    }

    /* ----------------  DELETE  ---------------- */
    public async delete(dto: string[]) {
        return this.prisma.memberToEvent.deleteMany({
            where: { id: { in: dto } },
        });
    }
}

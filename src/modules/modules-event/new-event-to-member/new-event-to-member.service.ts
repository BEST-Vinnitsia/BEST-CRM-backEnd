import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
    ICreateRes,
    IDeleteArrayRes,
    IDeleteRes,
    IGetByIdRes,
    IGetByMemberIdRes,
    IGetByNewEventIdRes,
    IGetByResponsibleIdRes,
    IGetListRes,
    IUpdateRes,
} from './interfaces/res.interface';
import {
    ICreateReq,
    IDeleteReq,
    IGetByIdReq,
    IGetByMemberIdReq,
    IGetByNewEventIdReq,
    IGetByResponsibleIdReq,
    IUpdateReq,
} from './interfaces/req.interface';
import { ResponsibleService } from '../responsible/responsible.service';
import { NewEventService } from '../new-event/new-event.service';
import { MemberService } from '../../modules-member/member/member.service';

interface IMemberToNewEventService {
    getList(): Promise<IGetListRes[]>;

    getById(dto: IGetByIdReq): Promise<IGetByIdRes>;

    getByNewEventId(dto: IGetByNewEventIdReq): Promise<IGetByNewEventIdRes[]>;

    getByResponsibleId(dto: IGetByResponsibleIdReq): Promise<IGetByResponsibleIdRes[]>;

    getByMemberId(dto: IGetByMemberIdReq): Promise<IGetByMemberIdRes[]>;

    create(dto: ICreateReq): Promise<ICreateRes>;

    update(dto: IUpdateReq): Promise<IUpdateRes>;

    deleteById(dto: IDeleteReq): Promise<IDeleteRes>;

    deleteArray(dto: number[]): Promise<IDeleteArrayRes>;
}

@Injectable()
export class NewEventToMemberService implements IMemberToNewEventService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly responsibleService: ResponsibleService,
        private readonly newEventService: NewEventService,
        private readonly memberService: MemberService,
    ) {}

    /* ----------------  GET  ---------------- */
    public async getList(): Promise<IGetListRes[]> {
        return this.prisma.newEventToMember.findMany({
            select: {
                id: true,
                newEventId: true,
                responsibleId: true,
                memberId: true,
                excludedDate: true,
                excluded: true,
            },
        });
    }

    public async getById(dto: IGetByIdReq): Promise<IGetByIdRes> {
        const responsible = await this.prisma.newEventToMember.findUnique({ where: { id: parseInt(dto.id) } });
        if (!responsible) throw new NotFoundException('Not found');

        return responsible;
    }

    public async getByNewEventId(dto: IGetByNewEventIdReq): Promise<IGetByNewEventIdRes[]> {
        return this.prisma.newEventToMember.findMany({ where: { newEventId: parseInt(dto.newEventId) } });
    }

    public async getByResponsibleId(dto: IGetByResponsibleIdReq): Promise<IGetByResponsibleIdRes[]> {
        return this.prisma.newEventToMember.findMany({ where: { responsibleId: parseInt(dto.responsibleId) } });
    }

    public async getByMemberId(dto: IGetByMemberIdReq): Promise<IGetByMemberIdRes[]> {
        return this.prisma.newEventToMember.findMany({ where: { memberId: parseInt(dto.memberId) } });
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: ICreateReq): Promise<ICreateRes> {
        const newEventToMemberById = await this.prisma.newEventToMember.findFirst({
            where: { memberId: dto.memberId, responsibleId: dto.responsibleId, newEventId: dto.newEventId },
        });
        if (newEventToMemberById) throw new BadRequestException('New event to member is exist');

        await this.newEventService.checkById({ id: dto.newEventId });
        await this.responsibleService.checkById({ id: dto.responsibleId });
        await this.memberService.checkById({ id: dto.memberId });

        const newEventToMemberByIdUpdate = await this.prisma.newEventToMember.create({
            data: {
                newEventId: dto.newEventId,
                responsibleId: dto.responsibleId,
                memberId: dto.memberId,
                excluded: dto.excluded,
                excludedDate: dto.excludedDate,
            },
        });

        return { id: newEventToMemberByIdUpdate.id };
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IUpdateReq): Promise<IUpdateRes> {
        const newEventToMemberById = await this.prisma.newEventToMember.findUnique({ where: { id: dto.id } });
        if (!newEventToMemberById) throw new NotFoundException('New event to member is not found');

        await this.newEventService.checkById({ id: dto.newEventId });
        await this.responsibleService.checkById({ id: dto.responsibleId });
        await this.memberService.checkById({ id: dto.memberId });

        const newEventToMemberByIdUpdate = await this.prisma.newEventToMember.update({
            where: { id: dto.id },
            data: {
                newEventId: dto.newEventId,
                responsibleId: dto.responsibleId,
                memberId: dto.memberId,
                excluded: dto.excluded,
                excludedDate: dto.excludedDate,
            },
        });

        return { id: newEventToMemberByIdUpdate.id };
    }

    /* ----------------  DELETE  ---------------- */
    public async deleteById(dto: IDeleteReq): Promise<IDeleteRes> {
        const newEventToMember = await this.prisma.newEventToMember.findUnique({ where: { id: parseInt(dto.id) } });
        if (!newEventToMember) throw new NotFoundException('Is not found');

        try {
            const deleteNewEventToMember = await this.prisma.newEventToMember.delete({ where: { id: parseInt(dto.id) } });
            return { id: deleteNewEventToMember.id };
        } catch (err) {
            throw new InternalServerErrorException('Error delete');
        }
    }

    public async deleteArray(dto: number[]): Promise<IDeleteArrayRes> {
        try {
            return this.prisma.newEventToMember.deleteMany({ where: { id: { in: dto } } });
        } catch (err) {
            throw new InternalServerErrorException('Error delete all');
        }
    }
}

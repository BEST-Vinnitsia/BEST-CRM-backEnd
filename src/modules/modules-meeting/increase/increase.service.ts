import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

import { ICreateReq, IDeleteReq, IGetByIdReq, IGetByMeetingIdReq, IGetByMemberIdReq, IUpdateReq } from './interfaces/req.interface';
import {
    ICreateRes,
    IDeleteArrayRes,
    IDeleteRes,
    IGetByIdRes,
    IGetByMeetingIdRes,
    IGetByMemberIdRes,
    IGetListRes,
    IUpdateRes,
} from './interfaces/res.interface';
import { MemberService } from '../../modules-member/member/member.service';
import { MeetingService } from '../meeting/meeting.service';

interface IIncreaseService {
    getList(): Promise<IGetListRes[]>;

    getById(dto: IGetByIdReq): Promise<IGetByIdRes>;

    getByMemberId(dto: IGetByMemberIdReq): Promise<IGetByMemberIdRes[]>;

    getByMeetingId(dto: IGetByMeetingIdReq): Promise<IGetByMeetingIdRes[]>;

    create(dto: ICreateReq): Promise<ICreateRes>;

    update(dto: IUpdateReq): Promise<IUpdateRes>;

    deleteById(dto: IDeleteReq): Promise<IDeleteRes>;

    deleteArray(dto: number[]): Promise<IDeleteArrayRes>;
}

@Injectable()
export class IncreaseService implements IIncreaseService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly memberService: MemberService,
        private readonly meetingService: MeetingService,
    ) {}

    /* ----------------  GET  ---------------- */
    public async getList(): Promise<IGetListRes[]> {
        return this.prisma.increase.findMany({
            select: { id: true, memberId: true, membership: true, meetingId: true },
        });
    }

    public async getByMemberId({ memberId }: IGetByMemberIdReq): Promise<IGetByMemberIdRes[]> {
        return this.prisma.increase.findMany({ where: { memberId } });
    }

    public async getByMeetingId({ meetingId }: IGetByMeetingIdReq): Promise<IGetByMeetingIdRes[]> {
        return this.prisma.increase.findMany({ where: { meetingId } });
    }

    public async getById(dto: IGetByIdReq): Promise<IGetByIdRes> {
        const increase = await this.prisma.increase.findUnique({ where: { id: dto.id } });
        if (!increase) throw new NotFoundException('Increase is not found');

        return increase;
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: ICreateReq): Promise<ICreateRes> {
        await this.memberService.getById({ id: dto.memberId });
        await this.meetingService.getById({ id: dto.meetingId });

        const increase = await this.prisma.increase.create({
            data: {
                memberId: dto.memberId,
                meetingId: dto.meetingId,
                membership: dto.membership,
            },
        });

        return { id: increase.id };
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IUpdateReq): Promise<IUpdateRes> {
        const increase = await this.prisma.increase.findUnique({ where: { id: dto.id } });
        if (!increase) throw new NotFoundException('This increase is not found');

        await this.memberService.getById({ id: dto.memberId });
        await this.meetingService.getById({ id: dto.meetingId });
        
        const updateIncrease = await this.prisma.increase.update({
            where: { id: dto.id },
            data: {
                memberId: dto.memberId,
                meetingId: dto.meetingId,
                membership: dto.membership,
            },
        });

        return { id: updateIncrease.id };
    }

    /* ----------------  DELETE  ---------------- */
    public async deleteById(dto: IDeleteReq): Promise<IDeleteRes> {
        const increase = await this.prisma.increase.findUnique({ where: { id: dto.id } });
        if (!increase) throw new NotFoundException('Increase is not found');

        try {
            const deleteIncrease = await this.prisma.increase.delete({ where: { id: dto.id } });
            return { id: deleteIncrease.id };
        } catch (err) {
            throw new InternalServerErrorException('Error delete increase');
        }
    }

    public async deleteArray(dto: number[]): Promise<IDeleteArrayRes> {
        try {
            return this.prisma.increase.deleteMany({ where: { id: { in: dto } } });
        } catch (err) {
            throw new InternalServerErrorException('Error delete all increase');
        }
    }
}

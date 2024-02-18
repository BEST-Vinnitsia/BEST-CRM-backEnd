import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ICreateRes, IDeleteArrayRes, IDeleteRes, IGetByCadenceIdRes, IGetByIdRes, IGetListRes, IUpdateRes } from './interfaces/res.interface';
import { ICreateReq, IDeleteReq, IGetByCadenceIdReq, IGetByIdReq, IUpdateReq } from './interfaces/req.interface';
import { CadenceService } from '../../cadence/cadence.service';

interface IMeetingService {
    getList(): Promise<IGetListRes[]>;

    getById(dto: IGetByIdReq): Promise<IGetByIdRes>;

    getByCadenceId(dto: IGetByCadenceIdReq): Promise<IGetByCadenceIdRes[]>;

    create(dto: ICreateReq): Promise<ICreateRes>;

    update(dto: IUpdateReq): Promise<IUpdateRes>;

    deleteById(dto: IDeleteReq): Promise<IDeleteRes>;

    deleteArray(dto: number[]): Promise<IDeleteArrayRes>;
}

@Injectable()
export class MeetingService implements IMeetingService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly cadenceService: CadenceService,
    ) {}

    /* ----------------  GET  ---------------- */
    public async getList(): Promise<IGetListRes[]> {
        return this.prisma.meeting.findMany({
            select: { id: true, cadenceId: true, name: true, type: true, date: true },
        });
    }

    public async getByCadenceId({ cadenceId }: IGetByCadenceIdReq): Promise<IGetByCadenceIdRes[]> {
        return this.prisma.meeting.findMany({ where: { cadenceId } });
    }

    public async getById({ id }: IGetByIdReq): Promise<IGetByIdRes> {
        const meeting = await this.prisma.meeting.findUnique({ where: { id } });
        if (!meeting) throw new NotFoundException('Meeting is not found');

        return meeting;
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: ICreateReq): Promise<ICreateRes> {
        // const meeting = await this.prisma.meeting.findFirst({
        //     where: { memberId: dto.memberId, cadenceId: dto.cadenceId, boardId: dto.boardId },
        // });
        // if (meeting) throw new BadRequestException('This meeting is exist');

        await this.cadenceService.checkById({ id: dto.cadenceId });

        const createMeeting = await this.prisma.meeting.create({
            data: {
                cadenceId: dto.cadenceId,
                name: dto.name.trim(),
                date: dto.date,
                type: dto.type,
            },
        });

        return { id: createMeeting.id };
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IUpdateReq): Promise<IUpdateRes> {
        const meeting = await this.prisma.meeting.findUnique({ where: { id: dto.id } });
        if (!meeting) throw new NotFoundException('Meeting not found');

        await this.cadenceService.checkById({ id: dto.cadenceId });

        const updateMeeting = await this.prisma.meeting.update({
            where: { id: dto.id },
            data: {
                cadenceId: dto.cadenceId,
                name: dto.name.trim(),
                date: dto.date,
            },
        });

        return { id: updateMeeting.id };
    }

    /* ----------------  DELETE  ---------------- */
    public async deleteById(dto: IDeleteReq): Promise<IDeleteReq> {
        const meeting = await this.prisma.meeting.findUnique({ where: { id: dto.id } });
        if (!meeting) throw new NotFoundException('Meeting is not found');

        try {
            const deleteMeeting = await this.prisma.meeting.delete({ where: { id: dto.id } });
            return { id: deleteMeeting.id };
        } catch (err) {
            throw new InternalServerErrorException('Error delete meeting');
        }
    }

    public async deleteArray(dto: number[]): Promise<IDeleteArrayRes> {
        try {
            return this.prisma.meeting.deleteMany({ where: { id: { in: dto } } });
        } catch (err) {
            throw new InternalServerErrorException('Error delete all meetings');
        }
    }
}

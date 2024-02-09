import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { IMeetingCreate, IMeetingGetByCadenceId, IMeetingGetById, IMeetingUpdate } from '../../../interfaces/meeting/meeting.interface';
import { CadenceService } from '../../cadence/cadence.service';

@Injectable()
export class MeetingService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly cadenceService: CadenceService,
    ) {}

    /* ----------------  GET  ---------------- */
    public async getList() {
        return this.prisma.meeting.findMany();
    }

    public async getByCadenceId({ cadenceId }: IMeetingGetByCadenceId) {
        return this.prisma.meeting.findMany({
            where: { cadenceId },
        });
    }

    public async getById({ id }: IMeetingGetById) {
        const result = await this.prisma.meeting.findUnique({
            where: { id },
        });
        if (!result) throw new NotFoundException('meeting is not found');

        return result;
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: IMeetingCreate) {
        await this.cadenceService.getById({ id: dto.cadenceId });

        const newMeeting = await this.prisma.meeting.create({
            data: {
                cadenceId: dto.cadenceId,
                name: dto.name.trim().toLocaleLowerCase(),
                date: dto.date,
            },
        });
        if (!newMeeting) throw new InternalServerErrorException();

        return newMeeting;
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IMeetingUpdate) {
        await this.cadenceService.getById({ id: dto.cadenceId });

        const checkMeeting = await this.prisma.meeting.findUnique({
            where: { id: dto.id },
        });
        if (!checkMeeting) throw new NotFoundException('this meeting is not found');

        const updateMeeting = await this.prisma.meeting.update({
            where: { id: dto.id },
            data: {
                cadenceId: dto.cadenceId,
                name: dto.name,
                date: dto.date,
            },
        });
        if (!updateMeeting) throw new InternalServerErrorException();

        return updateMeeting;
    }

    /* ----------------  DELETE  ---------------- */
    public async delete(dto: string[]) {
        return this.prisma.meeting.deleteMany({
            where: { id: { in: dto } },
        });
    }
}

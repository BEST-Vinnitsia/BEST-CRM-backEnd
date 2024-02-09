import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
    IIncreaseCreate,
    IIncreaseGetById,
    IIncreaseGetByMeetingId,
    IIncreaseGetByMemberId,
    IIncreaseUpdate,
} from '../../../interfaces/meeting/increase.interface';
import { MemberService } from '../../modules-member/member/member.service';
import { MeetingService } from '../meeting/meeting.service';

@Injectable()
export class IncreaseService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly memberService: MemberService,
        private readonly meetingService: MeetingService,
    ) {}

    /* ----------------  GET  ---------------- */
    public async getList() {
        return this.prisma.increase.findMany();
    }

    public async getByMemberId({ memberId }: IIncreaseGetByMemberId) {
        return this.prisma.increase.findMany({
            where: { memberId },
        });
    }

    public async getByMeetingId({ meetingId }: IIncreaseGetByMeetingId) {
        return this.prisma.increase.findMany({
            where: { meetingId },
        });
    }

    public async getById({ id }: IIncreaseGetById) {
        const result = await this.prisma.increase.findUnique({
            where: { id },
        });
        if (!result) throw new NotFoundException('increase is not found');

        return result;
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: IIncreaseCreate) {
        await this.meetingService.getById({ id: dto.meetingId });
        await this.memberService.getById({ id: dto.memberId });

        const newIncrease = await this.prisma.increase.create({
            data: {
                memberId: dto.memberId,
                meetingId: dto.meetingId,
                membership: dto.membership,
            },
        });
        if (!newIncrease) throw new InternalServerErrorException();

        return newIncrease;
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IIncreaseUpdate) {
        await this.meetingService.getById({ id: dto.meetingId });
        await this.memberService.getById({ id: dto.memberId });

        const checkIncrease = await this.prisma.increase.findUnique({
            where: { id: dto.id },
        });
        if (!checkIncrease) throw new NotFoundException('this increase is not found');

        const updateMeeting = await this.prisma.increase.update({
            where: { id: dto.id },
            data: {
                memberId: dto.memberId,
                meetingId: dto.meetingId,
                membership: dto.membership,
            },
        });
        if (!updateMeeting) throw new InternalServerErrorException();

        return updateMeeting;
    }

    /* ----------------  DELETE  ---------------- */
    public async delete(dto: string[]) {
        return this.prisma.increase.deleteMany({
            where: { id: { in: dto } },
        });
    }
}

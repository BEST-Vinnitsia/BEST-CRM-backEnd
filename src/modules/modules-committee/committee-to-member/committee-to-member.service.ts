import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {
    ICommitteeToMember,
    ICommitteeToMemberCreate,
    ICommitteeToMemberGetByCadenceId,
    ICommitteeToMemberGetByCommitteeId,
    ICommitteeToMemberGetById,
    ICommitteeToMemberGetByMemberId,
    ICommitteeToMemberUpdate,
} from 'src/interfaces/committee/committee-to-member.interface';
import { PrismaService } from '../../prisma/prisma.service';
import { MemberService } from '../../modules-member/member/member.service';
import { CadenceService } from '../../cadence/cadence.service';
import { CommitteeService } from '../committee/committee.service';

@Injectable()
export class CommitteeToMemberService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly memberService: MemberService,
        private readonly cadenceService: CadenceService,
        private readonly committeeService: CommitteeService,
    ) {}

    /* ----------------  GET  ---------------- */

    public async getList(): Promise<ICommitteeToMember[]> {
        return this.prisma.committeeToMember.findMany();
    }

    public async getById(dto: ICommitteeToMemberGetById): Promise<ICommitteeToMember> {
        const committeeToMember = await this.prisma.committeeToMember.findUnique({
            where: { id: dto.id },
        });
        if (!committeeToMember) throw new NotFoundException('committee to member not found');
        return committeeToMember;
    }

    public async getByMemberId(dto: ICommitteeToMemberGetByMemberId): Promise<ICommitteeToMember[]> {
        return this.prisma.committeeToMember.findMany({
            where: { memberId: dto.memberId },
        });
    }

    public async getByCadenceId(dto: ICommitteeToMemberGetByCadenceId): Promise<ICommitteeToMember[]> {
        return this.prisma.committeeToMember.findMany({
            where: { cadenceId: dto.cadenceId },
        });
    }

    public async getByCommitteeId(dto: ICommitteeToMemberGetByCommitteeId): Promise<ICommitteeToMember[]> {
        return this.prisma.committeeToMember.findMany({
            where: { committeeId: dto.committeeId },
        });
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: ICommitteeToMemberCreate): Promise<ICommitteeToMember> {
        const checkExist = await this.prisma.committeeToMember.findFirst({
            where: {
                memberId: dto.memberId,
                cadenceId: dto.cadenceId,
                committeeId: dto.committeeId,
            },
        });
        if (checkExist) throw new BadRequestException('This committee to member is exist');

        await this.memberService.getById({ id: dto.memberId });
        await this.cadenceService.getById({ id: dto.cadenceId });
        await this.committeeService.getById({ id: dto.committeeId });

        return this.prisma.committeeToMember.create({
            data: {
                cadenceId: dto.cadenceId,
                committeeId: dto.committeeId,
                memberId: dto.memberId,
            },
        });
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: ICommitteeToMemberUpdate): Promise<ICommitteeToMember> {
        const checkExist = await this.prisma.committeeToMember.findUnique({
            where: { id: dto.id },
        });
        if (!checkExist) throw new NotFoundException('committee to member not found');

        await this.memberService.getById({ id: dto.memberId });
        await this.cadenceService.getById({ id: dto.cadenceId });
        await this.committeeService.getById({ id: dto.committeeId });

        return this.prisma.committeeToMember.update({
            where: { id: dto.id },
            data: {
                cadenceId: dto.cadenceId,
                committeeId: dto.committeeId,
                memberId: dto.memberId,
            },
        });
    }

    /* ----------------  DELETE  ---------------- */
    public async delete(dto: string[]) {
        return this.prisma.committeeToMember.deleteMany({
            where: { id: { in: dto } },
        });
    }
}

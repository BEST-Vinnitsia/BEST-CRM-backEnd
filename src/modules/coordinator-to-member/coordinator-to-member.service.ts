import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {
    ICoordinatorToMember,
    ICoordinatorToMemberCreate,
    ICoordinatorToMemberGetByCoordinatorId,
    ICoordinatorToMemberGetByCadenceId,
    ICoordinatorToMemberGetById,
    ICoordinatorToMemberGetByMemberId,
    ICoordinatorToMemberUpdate,
} from 'src/interfaces/coordinator/coordinator-to-member.interface';
import { PrismaService } from '../prisma/prisma.service';
import { MemberService } from '../member/member.service';
import { CadenceService } from '../cadence/cadence.service';
import { CoordinatorService } from '../coordinator/coordinator.service';

@Injectable()
export class CoordinatorToMemberService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly memberService: MemberService,
        private readonly cadenceService: CadenceService,
        private readonly coordinatorService: CoordinatorService,
    ) {}

    /* ----------------  GET  ---------------- */

    public async getList(): Promise<ICoordinatorToMember[]> {
        return this.prisma.coordinatorToMember.findMany();
    }

    public async getById(dto: ICoordinatorToMemberGetById): Promise<ICoordinatorToMember> {
        const coordinatorToMember = await this.prisma.coordinatorToMember.findUnique({
            where: { id: dto.id },
        });
        if (!coordinatorToMember) throw new NotFoundException('board to member not found');
        return coordinatorToMember;
    }

    public async getByMemberId(dto: ICoordinatorToMemberGetByMemberId): Promise<ICoordinatorToMember[]> {
        return this.prisma.coordinatorToMember.findMany({
            where: { memberId: dto.memberId },
        });
    }

    public async getByCadenceId(dto: ICoordinatorToMemberGetByCadenceId): Promise<ICoordinatorToMember[]> {
        return this.prisma.coordinatorToMember.findMany({
            where: { cadenceId: dto.cadenceId },
        });
    }

    public async getByCoordinatorId(dto: ICoordinatorToMemberGetByCoordinatorId): Promise<ICoordinatorToMember[]> {
        return this.prisma.coordinatorToMember.findMany({
            where: { coordinatorId: dto.coordinatorId },
        });
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: ICoordinatorToMemberCreate): Promise<ICoordinatorToMember> {
        const checkExist = await this.prisma.coordinatorToMember.findFirst({
            where: {
                memberId: dto.memberId,
                cadenceId: dto.cadenceId,
                coordinatorId: dto.coordinatorId,
            },
        });
        if (checkExist) throw new BadRequestException('This board to member is exist');

        await this.memberService.getById({ id: dto.memberId });
        await this.cadenceService.getById({ id: dto.cadenceId });
        await this.coordinatorService.getById({ id: dto.coordinatorId });

        return this.prisma.coordinatorToMember.create({
            data: {
                cadenceId: dto.cadenceId,
                coordinatorId: dto.coordinatorId,
                memberId: dto.memberId,
            },
        });
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: ICoordinatorToMemberUpdate): Promise<ICoordinatorToMember> {
        const checkExist = await this.prisma.coordinatorToMember.findUnique({
            where: { id: dto.id },
        });
        if (!checkExist) throw new NotFoundException('Board to member not found');

        await this.memberService.getById({ id: dto.memberId });
        await this.cadenceService.getById({ id: dto.cadenceId });
        await this.coordinatorService.getById({ id: dto.coordinatorId });

        return this.prisma.coordinatorToMember.update({
            where: { id: dto.id },
            data: {
                cadenceId: dto.cadenceId,
                coordinatorId: dto.coordinatorId,
                memberId: dto.memberId,
            },
        });
    }

    /* ----------------  DELETE  ---------------- */
    public async delete(dto: string[]) {
        return this.prisma.coordinatorToMember.deleteMany({
            where: { id: { in: dto } },
        });
    }
}

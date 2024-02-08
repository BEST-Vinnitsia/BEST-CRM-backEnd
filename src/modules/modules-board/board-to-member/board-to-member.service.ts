import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import {
    IBoardToMember,
    IBoardToMemberCreate,
    IBoardToMemberGetByBoardId,
    IBoardToMemberGetByCadenceId,
    IBoardToMemberGetById,
    IBoardToMemberGetByMemberId,
    IBoardToMemberUpdate,
} from 'src/interfaces/board/board-to-member.interface';
import { PrismaService } from '../prisma/prisma.service';
import { MemberService } from '../member/member.service';
import { CadenceService } from '../cadence/cadence.service';
import { BoardService } from '../board/board.service';

@Injectable()
export class BoardToMemberService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly memberService: MemberService,
        private readonly cadenceService: CadenceService,
        private readonly boardService: BoardService,
    ) {}

    /* ----------------  GET  ---------------- */

    public async getList(): Promise<IBoardToMember[]> {
        return this.prisma.boardToMember.findMany();
    }

    public async getById(dto: IBoardToMemberGetById): Promise<IBoardToMember> {
        const boardToMember = await this.prisma.boardToMember.findUnique({
            where: { id: dto.id },
        });
        if (!boardToMember) throw new NotFoundException('board to member not found');
        return boardToMember;
    }

    public async getByMemberId(dto: IBoardToMemberGetByMemberId): Promise<IBoardToMember[]> {
        return this.prisma.boardToMember.findMany({
            where: { memberId: dto.memberId },
        });
    }

    public async getByCadenceId(dto: IBoardToMemberGetByCadenceId): Promise<IBoardToMember[]> {
        return this.prisma.boardToMember.findMany({
            where: { cadenceId: dto.cadenceId },
        });
    }

    public async getByBoardId(dto: IBoardToMemberGetByBoardId): Promise<IBoardToMember[]> {
        return this.prisma.boardToMember.findMany({
            where: { boardId: dto.boardId },
        });
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: IBoardToMemberCreate): Promise<IBoardToMember> {
        const checkExist = await this.prisma.boardToMember.findFirst({
            where: {
                memberId: dto.memberId,
                cadenceId: dto.cadenceId,
                boardId: dto.boardId,
            },
        });
        if (checkExist) throw new BadRequestException('This board to member is exist');

        await this.memberService.getById({ id: dto.memberId });
        await this.cadenceService.getById({ id: dto.cadenceId });
        await this.boardService.getById({ id: dto.boardId });

        return this.prisma.boardToMember.create({
            data: {
                cadenceId: dto.cadenceId,
                boardId: dto.boardId,
                memberId: dto.memberId,
            },
        });
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IBoardToMemberUpdate): Promise<IBoardToMember> {
        const checkExist = await this.prisma.boardToMember.findUnique({
            where: { id: dto.id },
        });
        if (!checkExist) throw new NotFoundException('Board to member not found');

        await this.memberService.getById({ id: dto.memberId });
        await this.cadenceService.getById({ id: dto.cadenceId });
        await this.boardService.getById({ id: dto.boardId });

        return this.prisma.boardToMember.update({
            where: { id: dto.id },
            data: {
                cadenceId: dto.cadenceId,
                boardId: dto.boardId,
                memberId: dto.memberId,
            },
        });
    }

    /* ----------------  DELETE  ---------------- */
    public async delete(dto: string[]) {
        return this.prisma.boardToMember.deleteMany({
            where: { id: { in: dto } },
        });
    }
}

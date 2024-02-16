import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
    ICreateRes,
    IDeleteArrayRes,
    IDeleteRes,
    IGetByCadenceIdRes,
    IGetByCommitteeIdRes,
    IGetByIdRes,
    IGetByMemberIdRes,
    IGetListRes,
    IUpdateRes,
} from './interfaces/res.interface';
import {
    ICreateReq,
    IDeleteReq,
    IGetByCadenceIdReq,
    IGetByCommitteeIdReq,
    IGetByIdReq,
    IGetByMemberIdReq,
    IUpdateReq,
} from './interfaces/req.interface';

interface ICommitteeToMemberService {
    getList(): Promise<IGetListRes[]>;

    getById(dto: IGetByIdReq): Promise<IGetByIdRes>;

    getByMemberId(dto: IGetByMemberIdReq): Promise<IGetByMemberIdRes[]>;

    getByCadenceId(dto: IGetByCadenceIdReq): Promise<IGetByCadenceIdRes[]>;

    getByCommitteeId(dto: IGetByCommitteeIdReq): Promise<IGetByCommitteeIdRes[]>;

    create(dto: ICreateReq): Promise<ICreateRes>;

    update(dto: IUpdateReq): Promise<IUpdateRes>;

    deleteById(dto: IDeleteReq): Promise<IDeleteRes>;

    deleteArray(dto: number[]): Promise<IDeleteArrayRes>;
}

@Injectable()
export class CommitteeToMemberService implements ICommitteeToMemberService {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  GET  ---------------- */

    public async getList(): Promise<IGetListRes[]> {
        return this.prisma.committeeToMember.findMany({
            select: {
                id: true,
                memberId: true,
                excludedDate: true,
                excluded: true,
                cadenceId: true,
                committeeId: true,
                isLeader: true,
            },
        });
    }

    public async getById(dto: IGetByIdReq): Promise<IGetByIdRes> {
        const committeeToMember = await this.prisma.committeeToMember.findUnique({ where: { id: dto.id } });
        if (!committeeToMember) throw new NotFoundException('Committee to member not found');
        return committeeToMember;
    }

    public async getByMemberId(dto: IGetByMemberIdReq): Promise<IGetByMemberIdRes[]> {
        return this.prisma.committeeToMember.findMany({ where: { memberId: dto.memberId } });
    }

    public async getByCadenceId(dto: IGetByCadenceIdReq): Promise<IGetByCadenceIdRes[]> {
        return this.prisma.committeeToMember.findMany({ where: { cadenceId: dto.cadenceId } });
    }

    public async getByCommitteeId(dto: IGetByCommitteeIdReq): Promise<IGetByCommitteeIdRes[]> {
        return this.prisma.committeeToMember.findMany({ where: { committeeId: dto.committeeId } });
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: ICreateReq): Promise<ICreateRes> {
        const committeeToMember = await this.prisma.committeeToMember.findFirst({
            where: { memberId: dto.memberId, cadenceId: dto.cadenceId, committeeId: dto.committeeId },
        });
        if (committeeToMember) throw new BadRequestException('This committee to member is exist');

        const createCommitteeToMember = await this.prisma.committeeToMember.create({
            data: {
                cadenceId: dto.cadenceId,
                committeeId: dto.committeeId,
                memberId: dto.memberId,
                isLeader: dto.isLeader,
                excluded: dto.excluded,
                excludedDate: dto.excludedDate,
            },
        });

        return { id: createCommitteeToMember.id };
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IUpdateReq): Promise<IUpdateRes> {
        const committeeToMember = await this.prisma.committeeToMember.findUnique({ where: { id: dto.id } });
        if (!committeeToMember) throw new NotFoundException('Committee to member not found');

        const updateCommitteeToMember = await this.prisma.committeeToMember.update({
            where: { id: dto.id },
            data: {
                cadenceId: dto.cadenceId,
                committeeId: dto.committeeId,
                memberId: dto.memberId,
                isLeader: dto.isLeader,
                excluded: dto.excluded,
                excludedDate: dto.excludedDate,
            },
        });

        return { id: updateCommitteeToMember.id };
    }

    /* ----------------  DELETE  ---------------- */
    public async deleteById(dto: IDeleteReq): Promise<IDeleteRes> {
        const committeeToMember = await this.prisma.committeeToMember.findUnique({ where: { id: dto.id } });
        if (!committeeToMember) throw new NotFoundException('Committee to member is not found');

        try {
            const deleteCommitteeToMember = await this.prisma.committeeToMember.delete({ where: { id: dto.id } });
            return { id: deleteCommitteeToMember.id };
        } catch (err) {
            throw new InternalServerErrorException('Error delete committee to member');
        }
    }

    public async deleteArray(dto: number[]): Promise<IDeleteArrayRes> {
        try {
            return this.prisma.committeeToMember.deleteMany({ where: { id: { in: dto } } });
        } catch (err) {
            throw new InternalServerErrorException('Error delete all committee to member');
        }
    }
}

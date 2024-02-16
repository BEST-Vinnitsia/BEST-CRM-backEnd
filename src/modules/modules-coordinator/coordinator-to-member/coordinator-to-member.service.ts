import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
    ICreateRes,
    IDeleteArrayRes,
    IDeleteRes,
    IGetByCadenceIdRes,
    IGetByCoordinatorIdRes,
    IGetByIdRes,
    IGetByMemberIdRes,
    IGetListRes,
    IUpdateRes,
} from './interfaces/res.interface';
import {
    ICreateReq,
    IDeleteReq,
    IGetByCadenceIdReq,
    IGetByCoordinatorIdReq,
    IGetByIdReq,
    IGetByMemberIdReq,
    IUpdateReq,
} from './interfaces/req.interface';

interface ICoordinatorToMemberService {
    getList(): Promise<IGetListRes[]>;

    getById(dto: IGetByIdReq): Promise<IGetByIdRes>;

    getByMemberId(dto: IGetByMemberIdReq): Promise<IGetByMemberIdRes[]>;

    getByCadenceId(dto: IGetByCadenceIdReq): Promise<IGetByCadenceIdRes[]>;

    getByCoordinatorId(dto: IGetByCoordinatorIdReq): Promise<IGetByCoordinatorIdRes[]>;

    create(dto: ICreateReq): Promise<ICreateRes>;

    update(dto: IUpdateReq): Promise<IUpdateRes>;

    deleteById(dto: IDeleteReq): Promise<IDeleteRes>;

    deleteArray(dto: number[]): Promise<IDeleteArrayRes>;
}

@Injectable()
export class CoordinatorToMemberService implements ICoordinatorToMemberService {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  GET  ---------------- */

    public async getList(): Promise<IGetListRes[]> {
        return this.prisma.coordinatorToMember.findMany({
            select: {
                id: true,
                coordinatorId: true,
                cadenceId: true,
                memberId: true,
                excluded: true,
                excludedDate: true,
            },
        });
    }

    public async getById(dto: IGetByIdReq): Promise<IGetByIdRes> {
        const coordinatorToMember = await this.prisma.coordinatorToMember.findUnique({ where: { id: dto.id } });
        if (!coordinatorToMember) throw new NotFoundException('board to member not found');
        return coordinatorToMember;
    }

    public async getByMemberId(dto: IGetByMemberIdReq): Promise<IGetByMemberIdRes[]> {
        return this.prisma.coordinatorToMember.findMany({ where: { memberId: dto.memberId } });
    }

    public async getByCadenceId(dto: IGetByCadenceIdReq): Promise<IGetByCadenceIdRes[]> {
        return this.prisma.coordinatorToMember.findMany({ where: { cadenceId: dto.cadenceId } });
    }

    public async getByCoordinatorId(dto: IGetByCoordinatorIdReq): Promise<IGetByCoordinatorIdRes[]> {
        return this.prisma.coordinatorToMember.findMany({ where: { coordinatorId: dto.coordinatorId } });
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: ICreateReq): Promise<ICreateRes> {
        const coordinatorToMember = await this.prisma.coordinatorToMember.findFirst({
            where: { memberId: dto.memberId, cadenceId: dto.cadenceId, coordinatorId: dto.coordinatorId },
        });
        if (coordinatorToMember) throw new BadRequestException('This coordinator to member is exist');

        const createCoordinatorToMember = await this.prisma.coordinatorToMember.create({
            data: {
                cadenceId: dto.cadenceId,
                coordinatorId: dto.coordinatorId,
                memberId: dto.memberId,
                excluded: dto.excluded,
                excludedDate: dto.excludedDate,
            },
        });

        return { id: createCoordinatorToMember.id };
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IUpdateReq): Promise<IUpdateRes> {
        const coordinatorToMember = await this.prisma.coordinatorToMember.findUnique({ where: { id: dto.id } });
        if (!coordinatorToMember) throw new NotFoundException('Coordinator to member not found');

        const updateCoordinatorToMember = await this.prisma.coordinatorToMember.update({
            where: { id: dto.id },
            data: {
                cadenceId: dto.cadenceId,
                coordinatorId: dto.coordinatorId,
                memberId: dto.memberId,
                excluded: dto.excluded,
                excludedDate: dto.excludedDate,
            },
        });

        return { id: updateCoordinatorToMember.id };
    }

    /* ----------------  DELETE  ---------------- */
    public async deleteById(dto: IDeleteReq): Promise<IDeleteRes> {
        const coordinatorToMember = await this.prisma.coordinatorToMember.findUnique({ where: { id: dto.id } });
        if (!coordinatorToMember) throw new NotFoundException('Coordinator to member is not found');

        try {
            const deleteCoordinatorToMember = await this.prisma.coordinatorToMember.delete({ where: { id: dto.id } });
            return { id: deleteCoordinatorToMember.id };
        } catch (err) {
            throw new InternalServerErrorException('Error delete coordinator to member');
        }
    }

    public async deleteArray(dto: number[]): Promise<IDeleteArrayRes> {
        try {
            return this.prisma.coordinatorToMember.deleteMany({ where: { id: { in: dto } } });
        } catch (err) {
            throw new InternalServerErrorException('Error delete all coordinator to member');
        }
    }
}

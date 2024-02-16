import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ICreateRes, IDeleteArrayRes, IDeleteRes, IGetByIdRes, IGetListRes, IUpdateRes } from './interfaces/res.interface';
import { ICreateReq, IDeleteReq, IGetByIdReq, IUpdateReq } from './interfaces/req.interface';

interface ICoordinatorService {
    getList(): Promise<IGetListRes[]>;

    getById(dto: IGetByIdReq): Promise<IGetByIdRes>;

    create(dto: ICreateReq): Promise<ICreateRes>;

    update(dto: IUpdateReq): Promise<IUpdateRes>;

    deleteById(dto: IDeleteReq): Promise<IDeleteRes>;

    deleteArray(dto: number[]): Promise<IDeleteArrayRes>;
}

@Injectable()
export class CoordinatorService implements ICoordinatorService {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  GET  ---------------- */
    public async getList(): Promise<IGetListRes[]> {
        return this.prisma.coordinator.findMany({ select: { id: true, isActive: true, name: true, fullName: true } });
    }

    public async getById(dto: IGetByIdReq): Promise<IGetByIdRes> {
        const coordinator = await this.prisma.coordinator.findUnique({ where: { id: dto.id } });
        if (!coordinator) throw new NotFoundException('Coordinator not found');

        return coordinator;
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: ICreateReq): Promise<ICreateRes> {
        const coordinatorByName = await this.prisma.coordinator.findUnique({ where: { name: dto.name } });
        if (coordinatorByName) throw new BadRequestException('Coordinator with this name is exist');

        const coordinatorByFullName = await this.prisma.coordinator.findUnique({ where: { fullName: dto.fullName } });
        if (coordinatorByFullName) throw new BadRequestException('Coordinator with this full name is exist');

        const coordinatorCreate = await this.prisma.coordinator.create({
            data: { name: dto.name, fullName: dto.fullName, isActive: dto.isActive },
        });

        return { id: coordinatorCreate.id };
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IUpdateReq): Promise<IUpdateRes> {
        const coordinatorById = await this.prisma.coordinator.findUnique({ where: { id: dto.id } });
        if (!coordinatorById) throw new NotFoundException('Coordinator is not found');

        const coordinatorByName = await this.prisma.coordinator.findUnique({ where: { name: dto.name } });
        if (coordinatorByName) throw new BadRequestException('Coordinator with this name is exist');

        const coordinatorByFullName = await this.prisma.coordinator.findUnique({ where: { fullName: dto.fullName } });
        if (coordinatorByFullName) throw new BadRequestException('Coordinator with this full name is exist');

        const committeeUpdate = await this.prisma.coordinator.update({
            where: { id: dto.id },
            data: { name: dto.name, fullName: dto.fullName, isActive: dto.isActive },
        });

        return { id: committeeUpdate.id };
    }

    /* ----------------  DELETE  ---------------- */
    public async deleteById(dto: IDeleteReq): Promise<IDeleteRes> {
        const coordinator = await this.prisma.coordinator.findUnique({ where: { id: dto.id } });
        if (!coordinator) throw new NotFoundException('Coordinator is not found');

        try {
            const deleteCoordinator = await this.prisma.coordinator.delete({ where: { id: dto.id } });
            return { id: deleteCoordinator.id };
        } catch (err) {
            throw new InternalServerErrorException('Error delete coordinator');
        }
    }

    public async deleteArray(dto: number[]): Promise<IDeleteArrayRes> {
        try {
            return this.prisma.coordinator.deleteMany({ where: { id: { in: dto } } });
        } catch (err) {
            throw new InternalServerErrorException('Error delete all coordinator');
        }
    }
}

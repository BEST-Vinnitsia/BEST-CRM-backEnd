import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ICoordinator, ICoordinatorCreate, ICoordinatorGetById, ICoordinatorUpdate } from 'src/interfaces/coordinator/coordinator.interface';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CoordinatorService {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  GET  ---------------- */
    public async getList(): Promise<ICoordinator[]> {
        return this.prisma.coordinator.findMany();
    }

    public async getById(dto: ICoordinatorGetById): Promise<ICoordinator> {
        const coordinator = await this.prisma.coordinator.findUnique({
            where: { id: dto.id },
        });
        if (!coordinator) throw new NotFoundException('coordinator not found');

        return coordinator;
    }

    public async byIdAllInfo(dto: ICoordinatorGetById) {
        const coordinator = await this.prisma.coordinator.findUnique({
            where: { id: dto.id },
            select: {
                id: true,
                name: true,
                isActive: true,
                coordinatorToMember: {
                    select: {
                        id: true,
                        excluded: true,
                        excludedDate: true,
                        cadence: { select: { id: true, number: true, isEnd: true } },
                        member: { select: { id: true, name: true, surname: true } },
                    },
                },
            },
        });
        if (!coordinator) throw new NotFoundException('coordinator not found');

        return coordinator;
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: ICoordinatorCreate): Promise<ICoordinator> {
        const coordinator = await this.prisma.coordinator.findUnique({
            where: { name: dto.name },
        });
        if (coordinator) throw new BadRequestException('coordinator is exist');

        return this.prisma.coordinator.create({
            data: {
                name: dto.name,
                isActive: dto.isActive,
            },
        });
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: ICoordinatorUpdate): Promise<ICoordinator> {
        const coordinator = await this.prisma.coordinator.findUnique({
            where: { id: dto.id },
        });
        if (!coordinator) throw new NotFoundException('coordinator is not exist');

        return this.prisma.coordinator.update({
            where: { id: dto.id },
            data: {
                isActive: dto.isActive,
            },
        });
    }

    /* ----------------  DELETE  ---------------- */
    public async delete(dto: string[]) {
        return this.prisma.coordinator.deleteMany({
            where: { id: { in: dto } },
        });
    }
}

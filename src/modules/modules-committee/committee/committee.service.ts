import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ICommittee, ICommitteeCreate, ICommitteeGetById, ICommitteeUpdate } from '../../../interfaces/committee/committee.interface';

@Injectable()
export class CommitteeService {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  GET  ---------------- */
    public async getList(): Promise<ICommittee[]> {
        return this.prisma.committee.findMany();
    }

    public async getById(dto: ICommitteeGetById): Promise<ICommittee> {
        const committee = await this.prisma.committee.findUnique({
            where: { id: dto.id },
        });
        if (!committee) throw new NotFoundException('committee not found');

        return committee;
    }

    public async byIdAllInfo(dto: ICommitteeGetById) {
        const committee = await this.prisma.committee.findUnique({
            where: { id: dto.id },
            select: {
                id: true,
                name: true,
                isActive: true,
                committeeToMember: {
                    select: {
                        id: true,
                        isLeader: true,
                        excluded: true,
                        excludedDate: true,
                        cadence: { select: { id: true, number: true, isEnd: true } },
                        member: { select: { id: true, name: true, surname: true } },
                    },
                },
            },
        });
        if (!committee) throw new NotFoundException('committee not found');

        return committee;
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: ICommitteeCreate): Promise<ICommittee> {
        const committee = await this.prisma.committee.findUnique({
            where: { name: dto.name },
        });
        if (committee) throw new BadRequestException('committee is exist');

        return this.prisma.committee.create({
            data: {
                name: dto.name,
                isActive: dto.isActive,
            },
        });
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: ICommitteeUpdate): Promise<ICommittee> {
        const committee = await this.prisma.committee.findUnique({
            where: { id: dto.id },
        });
        if (!committee) throw new NotFoundException('committee is not exist');

        return this.prisma.committee.update({
            where: { id: dto.id },
            data: {
                isActive: dto.isActive,
            },
        });
    }

    /* ----------------  DELETE  ---------------- */
    public async delete(dto: string[]) {
        return this.prisma.committee.deleteMany({
            where: { id: { in: dto } },
        });
    }
}

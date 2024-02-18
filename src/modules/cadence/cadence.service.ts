import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { ICreateReq, IDeleteReq, IGetByIdReq, IUpdateReq } from './interfaces/req.interface';
import { ICreateRes, IDeleteArrayRes, IDeleteRes, IGetByIdRes, IGetListRes, IUpdateRes } from './interfaces/res.interface';
import { PrismaService } from '../prisma/prisma.service';

interface ICadenceService {
    getList(): Promise<IGetListRes[]>;

    getById(dto: IGetByIdReq): Promise<IGetByIdRes>;

    create(dto: ICreateReq): Promise<ICreateRes>;

    update(dto: IUpdateReq): Promise<IUpdateRes>;

    deleteById(dto: IDeleteReq): Promise<IDeleteRes>;

    deleteArray(dto: number[]): Promise<IDeleteArrayRes>;
}

@Injectable()
export class CadenceService implements ICadenceService {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  GET  ---------------- */

    public async getList(): Promise<IGetListRes[]> {
        return this.prisma.cadence.findMany({
            select: { id: true, number: true, isEnd: true, endDate: true, startDate: true },
        });
    }

    public async getById(dto: IGetByIdReq): Promise<IGetByIdRes> {
        const cadence = await this.prisma.cadence.findUnique({
            where: { id: parseInt(dto.id) },
            select: {
                id: true,
                number: true,
                isEnd: true,
                endDate: true,
                startDate: true,
                updatedAt: true,
                createdAt: true,
            },
        });
        if (!cadence) throw new NotFoundException('cadence not found');

        return cadence;
    }

    public async checkById({ id }: { id: number }): Promise<IGetByIdRes> {
        const cadence = await this.prisma.cadence.findUnique({ where: { id } });
        if (!cadence) throw new NotFoundException('cadence not found');

        return cadence;
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: ICreateReq): Promise<ICreateRes> {
        const cadence = await this.prisma.cadence.findUnique({ where: { number: dto.number } });
        if (cadence) throw new BadRequestException('Cadence with this number is exist');

        const newCadence = await this.prisma.cadence.create({
            data: {
                number: dto.number,
                isEnd: dto.isEnd,
                startDate: dto.startDate ? dto.startDate : null,
                endDate: dto.endDate ? dto.endDate : null,
            },
        });

        return { id: newCadence.id };
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IUpdateReq): Promise<IUpdateRes> {
        const cadenceById = await this.prisma.cadence.findUnique({ where: { id: dto.id } });
        if (!cadenceById) throw new NotFoundException('Cadence not found');

        const cadenceByNumber = await this.prisma.cadence.findUnique({ where: { number: dto.number } });
        if (cadenceByNumber) throw new BadRequestException('Cadence with this number is exist');

        const cadenceUpdate = await this.prisma.cadence.update({
            where: { id: dto.id },
            data: {
                number: dto.number,
                isEnd: dto.isEnd,
                startDate: dto.startDate ? dto.startDate : null,
                endDate: dto.endDate ? dto.endDate : null,
            },
        });

        return { id: cadenceUpdate.id };
    }

    /* ----------------  DELETE  ---------------- */
    public async deleteById(dto: IDeleteReq): Promise<IDeleteRes> {
        const cadence = await this.prisma.cadence.findUnique({ where: { id: parseInt(dto.id) } });
        if (!cadence) throw new NotFoundException('Cadence is not found');

        const deleteCadence = await this.prisma.cadence.delete({ where: { id: parseInt(dto.id) } });

        return { id: deleteCadence.id };
    }

    public async deleteArray(dto: number[]): Promise<IDeleteArrayRes> {
        try {
            return this.prisma.cadence.deleteMany({ where: { id: { in: dto } } });
        } catch (err) {
            throw new InternalServerErrorException('Error delete all cadences');
        }
    }
}

import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ICreateRes, IDeleteArrayRes, IDeleteRes, IGetByIdRes, IGetListRes, IUpdateRes } from './interfaces/res.interface';
import { ICreateReq, IDeleteReq, IGetByIdReq, IUpdateReq } from './interfaces/req.interface';

interface IBoardService {
    getList(): Promise<IGetListRes[]>;

    getById(dto: IGetByIdReq): Promise<IGetByIdRes>;

    create(dto: ICreateReq): Promise<ICreateRes>;

    update(dto: IUpdateReq): Promise<IUpdateRes>;

    deleteById(dto: IDeleteReq): Promise<IDeleteRes>;

    deleteArray(dto: number[]): Promise<IDeleteArrayRes>;
}

@Injectable()
export class BoardService implements IBoardService {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  GET  ---------------- */
    public async getList(): Promise<IGetListRes[]> {
        return this.prisma.board.findMany({
            select: { id: true, name: true, fullName: true, isActive: true },
        });
    }

    public async getById(dto: IGetByIdReq): Promise<IGetByIdRes> {
        const board = await this.prisma.board.findUnique({ where: { id: dto.id } });
        if (!board) throw new NotFoundException('board not found');

        return board;
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: ICreateReq): Promise<ICreateRes> {
        const boardByName = await this.prisma.board.findUnique({ where: { name: dto.name } });
        if (boardByName) throw new BadRequestException('Board with this name is exist');

        const boardByFullName = await this.prisma.board.findUnique({ where: { fullName: dto.fullName } });
        if (boardByFullName) throw new BadRequestException('Board with this full name is exist');

        const boardCreate = await this.prisma.board.create({
            data: { name: dto.name, fullName: dto.fullName, isActive: dto.isActive },
        });

        return { id: boardCreate.id };
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IUpdateReq): Promise<IUpdateRes> {
        const boardById = await this.prisma.board.findUnique({ where: { id: dto.id } });
        if (!boardById) throw new NotFoundException('Board is not found');

        const boardByName = await this.prisma.board.findUnique({ where: { name: dto.name } });
        if (boardByName) throw new BadRequestException('Board with this name is exist');

        const boardByFullName = await this.prisma.board.findUnique({ where: { fullName: dto.fullName } });
        if (boardByFullName) throw new BadRequestException('Board with this full name is exist');

        const boardUpdate = await this.prisma.board.update({
            where: { id: dto.id },
            data: { name: dto.name, fullName: dto.fullName, isActive: dto.isActive },
        });

        return { id: boardUpdate.id };
    }

    /* ----------------  DELETE  ---------------- */
    public async deleteById(dto: IDeleteReq): Promise<IDeleteRes> {
        const board = await this.prisma.board.findUnique({ where: { id: dto.id } });
        if (!board) throw new NotFoundException('Board is not found');

        try {
            const deleteBoard = await this.prisma.board.delete({ where: { id: dto.id } });
            return { id: deleteBoard.id };
        } catch (err) {
            throw new InternalServerErrorException('Error delete board');
        }
    }

    public async deleteArray(dto: number[]): Promise<IDeleteArrayRes> {
        try {
            return this.prisma.board.deleteMany({ where: { id: { in: dto } } });
        } catch (err) {
            throw new InternalServerErrorException('Error delete all board');
        }
    }
}

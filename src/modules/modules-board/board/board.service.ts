import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { IBoard, IBoardCreate, IBoardGetById, IBoardUpdate } from 'src/interfaces/board/board.interface';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BoardService {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  GET  ---------------- */
    public async getList(): Promise<IBoard[]> {
        return this.prisma.board.findMany();
    }

    public async getById(dto: IBoardGetById): Promise<IBoard> {
        const board = await this.prisma.board.findUnique({
            where: { id: dto.id },
        });
        if (!board) throw new NotFoundException('board not found');

        return board;
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: IBoardCreate): Promise<IBoard> {
        const board = await this.prisma.board.findUnique({
            where: { name: dto.name },
        });
        if (board) throw new BadRequestException('board is exist');

        return this.prisma.board.create({
            data: {
                name: dto.name,
                isActive: dto.isActive,
            },
        });
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IBoardUpdate): Promise<IBoard> {
        const board = await this.prisma.board.findUnique({
            where: { id: dto.id },
        });
        if (!board) throw new NotFoundException('board is not exist');

        return this.prisma.board.update({
            where: { id: dto.id },
            data: {
                isActive: dto.isActive,
            },
        });
    }

    /* ----------------  DELETE  ---------------- */
    public async delete(dto: string[]) {
        return this.prisma.board.deleteMany({
            where: { id: { in: dto } },
        });
    }
}

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { IBoard, IBoardCreate, IBoardDeleteArray, IBoardGetById, IBoardUpdate } from 'src/interfaces/board/board.interface';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BoardService {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  GET  ---------------- */

    // get list
    public async getList(): Promise<IBoard[]> {
        const boardList = await this.prisma.board.findMany();

        return boardList;
    }

    // get by id
    public async getById(data: IBoardGetById): Promise<IBoard> {
        const board = await this.prisma.board.findUnique({
            where: { id: data.id },
        });

        if (!board) throw new NotFoundException('board not found');

        return board;
    }

    /* ----------------  POST  ---------------- */
    public async create(data: IBoardCreate): Promise<IBoard> {
        const board = await this.checkByName({ name: data.name });
        if (board) throw new BadRequestException('board is exist');

        const boardNew = await this.prisma.board.create({
            data: {
                name: data.name,
                isActive: data.isActive,
            },
        });

        return boardNew;
    }

    /* ----------------  PUT  ---------------- */
    public async update(data: IBoardUpdate): Promise<IBoard> {
        const board = await this.checkById({ id: data.id });
        if (!board) throw new NotFoundException('board is not exist');

        const membershipUpdate = await this.prisma.board.update({
            where: { id: data.id },
            data: {
                isActive: data.isActive,
            },
        });

        return membershipUpdate;
    }

    /* ----------------  DELETE  ---------------- */
    public async delete(dto: string[]) {
        const deleteRes = this.prisma.board.deleteMany({
            where: { id: { in: dto } },
        });

        return deleteRes;
    }

    //
    //
    //

    // check by id
    private async checkById({ id }: { id: string }): Promise<IBoard> {
        const board = await this.prisma.board.findUnique({ where: { id } });
        return board;
    }

    // check by number
    private async checkByName({ name }: { name: string }): Promise<IBoard> {
        const board = await this.prisma.board.findUnique({ where: { name } });
        return board;
    }
}

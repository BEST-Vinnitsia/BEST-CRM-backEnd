import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SocialNetworkService {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  GET  ---------------- */
    public async getListByMemberId() {}

    public async getMainByMemberId() {}

    /* ----------------  POST  ---------------- */
    public async create() {}

    /* ----------------  PUT  ---------------- */
    public async update() {}

    /* ----------------  DELETE  ---------------- */
    public async delete() {}
}

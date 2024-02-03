import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class PhoneService {
    constructor(private readonly prisma: DatabaseService) {}

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

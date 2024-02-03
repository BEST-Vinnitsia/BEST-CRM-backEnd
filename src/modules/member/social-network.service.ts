import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {
    IMember,
    IMemberCheckById,
    IMemberCheckEmail,
    IMemberCreate,
    IMemberCreateRes,
    IMemberDelete,
    IMemberGetId,
    IMemberGetIdRes,
    IMemberGetListRes,
    IMemberUpdate,
} from 'src/interfaces/member/member.type';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class SocialNetworkService {
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

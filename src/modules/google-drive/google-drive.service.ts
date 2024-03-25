import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EventCategoryCreateDto, EventCategoryDelete, EventCategoryDetailsDto, EventCategoryUpdateDto } from './dto/google-drive.dto';

@Injectable()
export class GoogleDriveService /*implements IEventService*/ {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  Category  ---------------- */
    public async getList() {
        return '';
    }

    public async getById(dto: EventCategoryDetailsDto) {
        return dto;
    }

    public async add(dto: EventCategoryCreateDto) {
        return dto;
    }

    public async update(dto: EventCategoryUpdateDto) {
        return dto;
    }

    public async delete(dto: EventCategoryDelete) {
        return dto;
    }
}

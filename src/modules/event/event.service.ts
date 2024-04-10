import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EventCategoryCreateDto, EventCategoryDelete, EventCategoryDetailsDto, EventCategoryUpdateDto } from './dto/event.dto';

@Injectable()
export class EventService /*implements IEventService*/ {
    constructor(private readonly prisma: PrismaService) {}

    /* ----------------  Category  ---------------- */
    public async getListCategory() {
        return this.prisma.eventCategory.findMany({
            select: { id: true, name: true, status: true, type: true },
        });
    }

    public async getDetailsCategory(dto: EventCategoryDetailsDto) {
        const dtoId = parseInt(dto.id);

        const eventCategory = await this.prisma.eventCategory.findUnique({
            where: { id: dtoId },
        });

        if (!eventCategory) throw new NotFoundException();

        const eventCategoryPosition = await this.prisma.eventPosition.findMany({
            where: { eventCategoryId: dtoId },
        });

        return { ...eventCategory, positions: eventCategoryPosition };
    }

    public async createCategory(dto: EventCategoryCreateDto) {
        const eventCreate = await this.prisma.eventCategory.create({
            data: { name: dto.name, type: dto.type, status: dto.status },
        });

        return { id: eventCreate.id };
    }

    public async updateCategory(dto: EventCategoryUpdateDto) {
        const eventCategoryCheck = await this.prisma.eventCategory.findUnique({
            where: { id: dto.id },
        });

        if (!eventCategoryCheck) throw new NotFoundException();

        // update event category
        const eventCategoryUpdate = await this.prisma.eventCategory.update({
            where: { id: dto.id },
            data: { name: dto.name, type: dto.type, status: dto.status },
        });

        // POSITIONS
        // get positions list in db
        const positionsList = await this.prisma.eventPosition.findMany({
            where: { eventCategoryId: dto.id },
        });

        // check positions
        for (const position of dto.positions) {
            const check = positionsList.find((item) => item.id === position.id);
            if (!check) throw new BadRequestException();
        }

        // delete positions
        const positionsToDelete = positionsList.filter(
            (item) =>
                !dto.positions.some(
                    (item2) => item2.id === item.id, //
                ),
        );

        for (const position of positionsToDelete) {
            await this.prisma.eventPosition.delete({
                where: { id: position.id },
            });
        }

        // update positions
        for (const position of dto.positions) {
            await this.prisma.eventPosition.update({
                where: { id: position.id, eventCategoryId: dto.id },
                data: { name: position.name, role: position.role },
            });
        }

        // create positions
        await Promise.all([
            dto.newPositions.map(
                async (item) =>
                    await this.prisma.eventPosition.create({
                        data: { eventCategoryId: dto.id, name: item.name, role: item.role },
                    }),
            ),
        ]);

        return { id: eventCategoryUpdate.id };
    }

    public async deleteCategory(dto: EventCategoryDelete) {
        const dtoId = parseInt(dto.id);

        const checkEvent = await this.prisma.eventCategory.findUnique({
            where: { id: dtoId },
        });

        if (!checkEvent) throw new NotFoundException();

        await this.prisma.eventPosition.deleteMany({
            where: { eventCategoryId: dtoId },
        });

        const eventDelete = await this.prisma.eventCategory.delete({
            where: { id: dtoId },
        });

        return { id: eventDelete.id };
    }
}

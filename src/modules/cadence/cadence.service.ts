import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ICadence, ICadenceCreate, ICadenceDelete, ICadenceGetById, ICadenceUpdate } from 'src/interfaces/cadence.interface';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class CadenceService {
  constructor(private readonly prisma: DatabaseService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<ICadence[]> {
    const membershipList = await this.prisma.cadence.findMany();

    return membershipList;
  }

  // get by id
  public async getById(data: ICadenceGetById): Promise<ICadence> {
    const cadence = await this.prisma.cadence.findUnique({ where: { id: data.id } });
    if (!cadence) throw new NotFoundException('cadence not found');

    return cadence;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: ICadenceCreate): Promise<ICadence> {
    const cadence = await this.checkByNumber({ number: data.number });
    if (cadence) throw new BadRequestException('cadence is exist');

    const cadenceNew = await this.prisma.cadence.create({
      data: {
        number: data.number,
        startDate: data.startDate,
        endDate: data.endDate,
        ended: data.ended,
      },
    });

    return cadenceNew;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: ICadenceUpdate): Promise<ICadence> {
    const cadenceById = await this.checkById({ id: data.id });
    if (!cadenceById) throw new NotFoundException('cadence not found');

    const cadenceByName = await this.checkByNumber({ number: data.number });
    if (cadenceByName) throw new BadRequestException('cadence is exist');

    const cadenceUpdate = await this.prisma.cadence.update({
      where: { id: data.id },
      data: {
        number: data.number,
        startDate: data.startDate,
        endDate: data.endDate,
        ended: data.ended,
      },
    });

    return cadenceUpdate;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ICadenceDelete): Promise<ICadence> {
    const cadence = await this.checkById({ id: data.id });
    if (!cadence) throw new NotFoundException('cadence not found');

    const cadenceDelete = await this.prisma.cadence.delete({ where: { id: data.id } });

    return cadenceDelete;
  }

  //
  //
  //

  // check by number
  private async checkById({ id }: { id: string }): Promise<ICadence> {
    const cadence = await this.prisma.cadence.findUnique({ where: { id } });
    return cadence;
  }

  // check by number
  private async checkByNumber({ number }: { number: number }): Promise<ICadence> {
    const cadence = await this.prisma.cadence.findUnique({ where: { number } });
    return cadence;
  }

  // check mux number
  private async checkMaxNumber(): Promise<any> {
    const cadence = await this.prisma.cadence.aggregate({ _max: { number: true } });
    return cadence._max.number;
  }
}

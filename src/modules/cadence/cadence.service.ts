import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CadenceDbService } from './cadence.db.service';
import { ICadence, ICadenceCreate, ICadenceDelete, ICadenceGetById, ICadenceUpdate } from 'src/interfaces/cadence.interface';

@Injectable()
export class CadenceService {
  constructor(private readonly cadenceDBService: CadenceDbService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<ICadence[]> {
    const membershipList = await this.cadenceDBService.findMany();
    return membershipList;
  }

  // get by id
  public async getById(data: ICadenceGetById): Promise<ICadence> {
    const cadence = await this.cadenceDBService.findById({ id: data.id });
    if (!cadence) throw new NotFoundException('cadence not found');

    return cadence;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: ICadenceCreate): Promise<ICadence> {
    const cadence = await this.cadenceDBService.checkByNumber({ number: data.number });
    if (cadence) throw new BadRequestException('cadence is exist');

    const cadenceNew = await this.cadenceDBService.create(data);
    return cadenceNew;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: ICadenceUpdate): Promise<ICadence> {
    const cadenceById = await this.cadenceDBService.checkById({ id: data.id });
    if (!cadenceById) throw new NotFoundException('cadence not found');

    const cadenceByName = await this.cadenceDBService.checkByNumber({ number: data.number });
    if (cadenceByName) throw new BadRequestException('cadence is exist');

    const cadenceUpdate = await this.cadenceDBService.update(data);
    return cadenceUpdate;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ICadenceDelete): Promise<ICadence> {
    const cadence = await this.cadenceDBService.checkById({ id: data.id });
    if (!cadence) throw new NotFoundException('cadence not found');

    const cadenceDelete = await this.cadenceDBService.delete(data);
    return cadenceDelete;
  }
}

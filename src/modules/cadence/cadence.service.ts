import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CadenceDbService } from './cadence.db.service';
import { ICadence, ICadence_create, ICadence_delete, ICadence_get_id, ICadence_update } from 'src/types/cadence.interface';

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
  public async getById(data: ICadence_get_id): Promise<ICadence> {
    // checking if the member exists
    const membership = await this.cadenceDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: ICadence_create): Promise<ICadence> {
    // checking if the member exists
    const membership = await this.cadenceDBService.checkByNumber({ number: data.number });
    if (membership) throw new BadRequestException('cadence is exist');

    const newMembership = await this.cadenceDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: ICadence_update): Promise<ICadence> {
    // checking if the member exists
    const membership = await this.cadenceDBService.checkByNumber({ number: data.number });
    if (membership) throw new BadRequestException('cadence is exist');

    const updateMembership = await this.cadenceDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ICadence_delete): Promise<ICadence> {
    // checking if the member exists
    const membership = await this.cadenceDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('cadence is not exist');

    const deleteMembership = await this.cadenceDBService.delete(membership);
    return deleteMembership;
  }
}

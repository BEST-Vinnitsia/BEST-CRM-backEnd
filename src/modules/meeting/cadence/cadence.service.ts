import { Injectable, BadRequestException } from '@nestjs/common';
import { CadenceDbService } from './cadence.db.service';
import { ICadence_Create, ICadence_Create_Res, ICadence_GetById, ICadence_GetById_Res, ICadence_GetList_Res } from 'src/types/cadence.type';

@Injectable()
export class CadenceService {
  constructor(private readonly cadenceDb: CadenceDbService) {}

  /**
   * create cadence
   */
  async create(data: ICadence_Create): Promise<ICadence_Create_Res> {
    // check if cadence is exist
    const cadence = await this.cadenceDb.findByNumber({ number: data.number });
    if (cadence) throw new BadRequestException('this cadence is exist');

    const newCadence = await this.cadenceDb.create(data);
    return newCadence;
  }

  /**
   * get cadence list
   */
  async getList(): Promise<ICadence_GetList_Res[]> {
    const cadenceList = await this.cadenceDb.findAll();
    return cadenceList;
  }

  /**
   * get cadence by id
   */
  async getById(data: ICadence_GetById): Promise<ICadence_GetById_Res> {
    const cadence = await this.cadenceDb.findById(data);
    if (!cadence) throw new BadRequestException('this cadence is not exist');

    return cadence;
  }
}

import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import {
  ICadence_Db_Create,
  ICadence_Db_Create_Res,
  ICadence_Db_GetById,
  ICadence_Db_GetById_Res,
  ICadence_Db_GetByNumber,
  ICadence_Db_GetByNumber_Res,
  ICadence_Db_GetList_Res,
} from 'src/types/cadence.type';
import { handlerError } from 'src/utils/handlerError';

@Injectable()
export class CadenceDbService {
  constructor(private readonly database: DatabaseService) {}

  /**
   * create cadence
   */
  public async create({ number, start_date, end_date }: ICadence_Db_Create): Promise<ICadence_Db_Create_Res> {
    const cadence = await handlerError(this.database.cadence.create({ data: { number, start_date, end_date } }));
    return cadence;
  }

  /**
   * get cadence list
   */
  public async findAll(): Promise<ICadence_Db_GetList_Res[]> {
    const cadence = await handlerError(this.database.cadence.findMany());
    return cadence;
  }

  /**
   * get cadence by id
   */
  public async findById({ id }: ICadence_Db_GetById): Promise<ICadence_Db_GetById_Res> {
    const cadence = await handlerError(this.database.cadence.findUnique({ where: { id } }));
    return cadence;
  }

  /**
   * get cadence by number
   */
  public async findByNumber({ number }: ICadence_Db_GetByNumber): Promise<ICadence_Db_GetByNumber_Res> {
    const cadence = await handlerError(this.database.cadence.findFirst({ where: { number } }));
    return cadence;
  }
}

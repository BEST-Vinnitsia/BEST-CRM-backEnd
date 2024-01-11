import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ICadence_create,
  ICadence_create_RES,
  ICadence_get_id,
  ICadence_get_id_RES,
  ICadence_get_list_RES,
  ICadence_update,
  ICadence_update_RES,
  ICadence_delete,
  ICadence_delete_RES,
  ICadence_check_number,
  ICadence_check_number_RES,
} from 'src/types/cadence.type';

@Injectable()
export class CadenceDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: ICadence_create): Promise<ICadence_create_RES> {
    const cadence = await handlerError(
      this.database.cadence.create({
        data: {
          number: data.number,
          startDate: data.startDate,
          endDate: data.endDate,
        },
      }),
    );
    return cadence;
  }

  /* ----------------  READ  ---------------- */

  // find many
  public async findMany(): Promise<ICadence_get_list_RES[]> {
    const cadence = await handlerError(this.database.cadence.findMany());
    return cadence;
  }

  // find by id
  public async findById({ id }: ICadence_get_id): Promise<ICadence_get_id_RES> {
    const cadence = await handlerError(this.database.cadence.findUnique({ where: { id } }));
    return cadence;
  }

  // check by number
  public async checkByNumber({ number }: ICadence_check_number): Promise<ICadence_check_number_RES> {
    const cadence = await handlerError(this.database.cadence.findUnique({ where: { number } }));
    return cadence;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: ICadence_update): Promise<ICadence_update_RES> {
    const cadence = await handlerError(
      this.database.cadence.update({
        where: { id: data.id },
        data: {
          number: data.number,
          startDate: data.startDate,
          endDate: data.endDate,
        },
      }),
    );
    return cadence;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ICadence_delete): Promise<ICadence_delete_RES> {
    const cadence = await handlerError(this.database.cadence.delete({ where: { id: data.id } }));
    return cadence;
  }
}

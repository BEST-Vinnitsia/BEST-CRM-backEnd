import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import { ICadence, ICadenceCreate, ICadenceGetById, ICadenceUpdate, ICadenceDelete } from 'src/interfaces/cadence.interface';

@Injectable()
export class CadenceDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: ICadenceCreate): Promise<ICadence> {
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
  public async findMany(): Promise<ICadence[]> {
    const cadence = await handlerError(this.database.cadence.findMany());
    return cadence;
  }

  // find by id
  public async findById({ id }: ICadenceGetById): Promise<ICadence> {
    const cadence = await handlerError(this.database.cadence.findUnique({ where: { id } }));
    return cadence;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: ICadenceUpdate): Promise<ICadence> {
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
  public async delete(data: ICadenceDelete): Promise<ICadence> {
    const cadence = await handlerError(this.database.cadence.delete({ where: { id: data.id } }));
    return cadence;
  }

  /* ----------------  CHECK  ---------------- */

  // check by number
  public async checkById({ id }: { id: string }): Promise<ICadence> {
    const cadence = await handlerError(this.database.cadence.findUnique({ where: { id } }));
    return cadence;
  }

  // check by number
  public async checkByNumber({ number }: { number: number }): Promise<ICadence> {
    const cadence = await handlerError(this.database.cadence.findUnique({ where: { number } }));
    return cadence;
  }

  // check mux number
  public async checkMaxNumber(): Promise<any> {
    const cadence = await handlerError(this.database.cadence.aggregate({ _max: { number: true } }));
    return cadence._max.number;
  }
}

import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ITranslation_create,
  ITranslation_create_RES,
  ITranslation_get_id,
  ITranslation_get_id_RES,
  ITranslation_get_list_RES,
  ITranslation_update,
  ITranslation_update_RES,
  ITranslation_delete,
  ITranslation_delete_RES,
} from 'src/types/translation.type';

@Injectable()
export class TranslationDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: ITranslation_create): Promise<ITranslation_create_RES> {
    const board = await handlerError(
      this.database.translation.create({
        data: {
          meetingId: data.meetingId,
          memberId: data.memberId,
          membershipId: data.membershipId,
        },
      }),
    );
    return board;
  }

  /* ----------------  READ  ---------------- */

  // find many
  public async findMany(): Promise<ITranslation_get_list_RES[]> {
    const board = await handlerError(this.database.translation.findMany());
    return board;
  }

  // find by id
  public async findById({ id }: ITranslation_get_id): Promise<ITranslation_get_id_RES> {
    const board = await handlerError(this.database.translation.findUnique({ where: { id } }));
    return board;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: ITranslation_update): Promise<ITranslation_update_RES> {
    const board = await handlerError(
      this.database.translation.update({
        where: { id: data.id },
        data: {
          meetingId: data.meetingId,
          memberId: data.memberId,
          membershipId: data.membershipId,
        },
      }),
    );
    return board;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ITranslation_delete): Promise<ITranslation_delete_RES> {
    const board = await handlerError(this.database.translation.delete({ where: { id: data.id } }));
    return board;
  }
}

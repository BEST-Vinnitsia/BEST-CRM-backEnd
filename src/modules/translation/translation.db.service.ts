import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import { ITranslation, ITranslation_create, ITranslation_get_id, ITranslation_update, ITranslation_delete } from 'src/interfaces/translation.interface';

@Injectable()
export class TranslationDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: ITranslation_create): Promise<ITranslation> {
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
  public async findMany(): Promise<ITranslation[]> {
    const board = await handlerError(this.database.translation.findMany());
    return board;
  }

  // find by id
  public async findById({ id }: ITranslation_get_id): Promise<ITranslation> {
    const board = await handlerError(this.database.translation.findUnique({ where: { id } }));
    return board;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: ITranslation_update): Promise<ITranslation> {
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
  public async delete(data: ITranslation_delete): Promise<ITranslation> {
    const board = await handlerError(this.database.translation.delete({ where: { id: data.id } }));
    return board;
  }
}

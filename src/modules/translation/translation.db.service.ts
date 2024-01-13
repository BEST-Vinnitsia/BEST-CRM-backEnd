import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import { ITranslation, ITranslationCreate, ITranslationGetById, ITranslationUpdate, ITranslationDelete } from 'src/interfaces/translation.interface';

@Injectable()
export class TranslationDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: ITranslationCreate): Promise<ITranslation> {
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
  public async findById({ id }: ITranslationGetById): Promise<ITranslation> {
    const board = await handlerError(this.database.translation.findUnique({ where: { id } }));
    return board;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: ITranslationUpdate): Promise<ITranslation> {
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
  public async delete(data: ITranslationDelete): Promise<ITranslation> {
    const board = await handlerError(this.database.translation.delete({ where: { id: data.id } }));
    return board;
  }

  /* ----------------  CHECK  ---------------- */

  // check by id
  public async checkById({ id }: { id: string }): Promise<ITranslation> {
    const board = await handlerError(this.database.translation.findUnique({ where: { id } }));
    return board;
  }
}

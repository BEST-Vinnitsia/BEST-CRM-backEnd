import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  ITranslationDbCreate,
  ITranslationDbCreateRes,
  ITranslationDbGetById,
  ITranslationDbGetByIdRes,
  ITranslationDbGetListRes,
} from 'src/types/translation.type';

@Injectable()
export class TranslationDbService {
  constructor(private readonly database: DatabaseService) {}

  public async create({ lga_id, member_id, membership_id }: ITranslationDbCreate): Promise<ITranslationDbCreateRes> {
    const user = await handlerError(
      this.database.translation.create({
        data: { lga_id, member_id, membership_id },
      }),
    );
    return user;
  }

  public async findAll(): Promise<ITranslationDbGetListRes[]> {
    const user = await handlerError(this.database.translation.findMany());
    return user;
  }

  public async findById({ id }: ITranslationDbGetById): Promise<ITranslationDbGetByIdRes> {
    const user = await handlerError(
      this.database.translation.findUnique({
        where: { id },
        // include: { lga: true, member: true, membership: true },
      }),
    );
    return user;
  }
}

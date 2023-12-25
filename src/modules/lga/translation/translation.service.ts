import { Injectable } from '@nestjs/common';
import { TranslationDbService } from './translation.db.service';
import {
  ITranslationCreate,
  ITranslationCreateRes,
  ITranslationGetById,
  ITranslationGetByIdRes,
  ITranslationGetListRes,
} from 'src/types/translation.type';

@Injectable()
export class TranslationService {
  constructor(private readonly TranslationDb: TranslationDbService) {}

  public async create(data: ITranslationCreate): Promise<ITranslationCreateRes> {
    const res = await this.TranslationDb.create(data);
    return res;
  }

  public async getList(): Promise<ITranslationGetListRes[]> {
    const res = await this.TranslationDb.findAll();
    return res;
  }

  public async getById(data: ITranslationGetById): Promise<ITranslationGetByIdRes> {
    const res = await this.TranslationDb.findById({ id: data.id });
    return res;
  }
}

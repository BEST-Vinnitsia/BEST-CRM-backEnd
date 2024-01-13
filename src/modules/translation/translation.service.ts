import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { TranslationDbService } from './translation.db.service';
import { ITranslation, ITranslationCreate, ITranslationDelete, ITranslationGetById, ITranslationUpdate } from 'src/interfaces/translation.interface';

@Injectable()
export class TranslationService {
  constructor(private readonly translationDBService: TranslationDbService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<ITranslation[]> {
    const translationList = await this.translationDBService.findMany();
    return translationList;
  }

  // get by id
  public async getById(data: ITranslationGetById): Promise<ITranslation> {
    const membership = await this.translationDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: ITranslationCreate): Promise<ITranslation> {
    const translationNew = await this.translationDBService.create(data);
    return translationNew;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: ITranslationUpdate): Promise<ITranslation> {
    const translationById = await this.translationDBService.checkById({ id: data.id });
    if (!translationById) throw new NotFoundException('cadence is not exist');

    const translationUpdate = await this.translationDBService.update(data);
    return translationUpdate;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ITranslationDelete): Promise<ITranslation> {
    const translationById = await this.translationDBService.checkById({ id: data.id });
    if (!translationById) throw new NotFoundException('cadence is not exist');

    const translationDelete = await this.translationDBService.delete(data);
    return translationDelete;
  }
}

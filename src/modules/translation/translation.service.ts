import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { TranslationDbService } from './translation.db.service';
import {
  ITranslation_create,
  ITranslation_create_RES,
  ITranslation_delete,
  ITranslation_delete_RES,
  ITranslation_get_id,
  ITranslation_get_id_RES,
  ITranslation_get_list_RES,
  ITranslation_update,
  ITranslation_update_RES,
} from 'src/types/translation.type';
import { AppDbService } from '../app/app.db.service';

@Injectable()
export class TranslationService {
  constructor(
    private readonly translationDBService: TranslationDbService,
    private readonly appDBService: AppDbService,
  ) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<ITranslation_get_list_RES[]> {
    const membershipList = await this.translationDBService.findMany();
    return membershipList;
  }

  // get by id
  public async getById(data: ITranslation_get_id): Promise<ITranslation_get_id_RES> {
    // checking if the member exists
    const membership = await this.translationDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: ITranslation_create): Promise<ITranslation_create_RES> {
    const newMembership = await this.translationDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: ITranslation_update): Promise<ITranslation_update_RES> {
    const updateMembership = await this.translationDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ITranslation_delete): Promise<ITranslation_delete_RES> {
    // checking if the member exists
    const membership = await this.translationDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('cadence is not exist');

    const deleteMembership = await this.translationDBService.delete(membership);
    return deleteMembership;
  }
}

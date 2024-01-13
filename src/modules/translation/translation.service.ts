import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { TranslationDbService } from './translation.db.service';
import { ITranslation, ITranslation_create, ITranslation_delete, ITranslation_get_id, ITranslation_update } from 'src/types/translation.interface';

@Injectable()
export class TranslationService {
  constructor(private readonly translationDBService: TranslationDbService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<ITranslation[]> {
    const membershipList = await this.translationDBService.findMany();
    return membershipList;
  }

  // get by id
  public async getById(data: ITranslation_get_id): Promise<ITranslation> {
    // checking if the member exists
    const membership = await this.translationDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: ITranslation_create): Promise<ITranslation> {
    const newMembership = await this.translationDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: ITranslation_update): Promise<ITranslation> {
    const updateMembership = await this.translationDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ITranslation_delete): Promise<ITranslation> {
    // checking if the member exists
    const membership = await this.translationDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('cadence is not exist');

    const deleteMembership = await this.translationDBService.delete(membership);
    return deleteMembership;
  }
}

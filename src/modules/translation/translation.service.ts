import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { TranslationDbService } from './translation.db.service';
import { ITranslation, ITranslationCreate, ITranslationDelete, ITranslationGetById, ITranslationUpdate } from 'src/interfaces/translation.interface';

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
  public async getById(data: ITranslationGetById): Promise<ITranslation> {
    // checking if the member exists
    const membership = await this.translationDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: ITranslationCreate): Promise<ITranslation> {
    const newMembership = await this.translationDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: ITranslationUpdate): Promise<ITranslation> {
    const updateMembership = await this.translationDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ITranslationDelete): Promise<ITranslation> {
    // checking if the member exists
    const membership = await this.translationDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('cadence is not exist');

    const deleteMembership = await this.translationDBService.delete(membership);
    return deleteMembership;
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { TranslationDbService } from './translation.db.service';
import {
  ITranslation_Create,
  ITranslation_Create_Res,
  ITranslation_GetById,
  ITranslation_GetById_Res,
  ITranslation_GetList_Res,
} from 'src/types/translation.type';
import { AppDbService } from 'src/app.db.service';

@Injectable()
export class TranslationService {
  constructor(
    private readonly translationDb: TranslationDbService,
    private readonly appDbService: AppDbService,
  ) {}

  /**
   * create translation
   */
  public async create(data: ITranslation_Create): Promise<ITranslation_Create_Res> {
    // check if meeting is exist
    const meeting = await this.appDbService.findMeetingById({ id: data.meeting_id });
    if (!meeting) throw new BadRequestException('this meeting is not exist');

    // check if member is exist
    const member = await this.appDbService.findMemberById({ id: data.member_id });
    if (!member) throw new BadRequestException('this member is not exist');

    // check if membership is exist
    const membership = await this.appDbService.findMembershipById({ id: data.membership_id });
    if (!membership) throw new BadRequestException('this membership is not exist');

    const newTranslation = await this.translationDb.create(data);
    return newTranslation;
  }

  /**
   * get translation list
   */
  public async getList(): Promise<ITranslation_GetList_Res[]> {
    const translationList = await this.translationDb.findAll();
    return translationList;
  }

  /**
   * get translation by id
   */
  public async getById(data: ITranslation_GetById): Promise<ITranslation_GetById_Res> {
    // check if translation is exist
    const translation = await this.translationDb.findById({ id: data.id });
    if (!translation) throw new BadRequestException('this translation is not exist');

    return translation;
  }
}

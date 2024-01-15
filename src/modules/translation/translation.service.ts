import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { TranslationDbService } from './translation.db.service';
import { ITranslation, ITranslationCreate, ITranslationDelete, ITranslationGetById, ITranslationUpdate } from 'src/interfaces/translation.interface';
import { MeetingEnum } from 'src/constants/enums.constant';

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
    const meetingById = await this.translationDBService.checkMeetingById({ meetingId: data.meetingId });
    if (!meetingById) throw new NotFoundException('meeting is not exist');
    if (meetingById.name !== MeetingEnum.LGA) throw new BadRequestException('incorrect meeting for translation');

    const memberById = await this.translationDBService.checkMemberById({ memberId: data.memberId });
    if (!memberById) throw new NotFoundException('member is not exist');
    if (memberById.membershipId === data.membershipId) throw new BadRequestException('user already have this membership');

    const membershipById = await this.translationDBService.checkMembershipById({ membershipId: data.membershipId });
    if (!membershipById) throw new NotFoundException('membership is not exist');

    await this.translationDBService.updateMemberMembership({ memberId: data.memberId, membershipId: data.membershipId });

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

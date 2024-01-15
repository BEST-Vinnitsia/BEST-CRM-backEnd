import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ITranslation, ITranslationCreate, ITranslationDelete, ITranslationGetById, ITranslationUpdate } from 'src/interfaces/translation.interface';
import { MeetingEnum } from 'src/constants/enums.constant';
import { DatabaseService } from '../database/database.service';
import { IMeeting } from 'src/interfaces/meeting.interface';
import { IMember } from 'src/interfaces/member/member.type';
import { IMembership } from 'src/interfaces/member/membership.type';

@Injectable()
export class TranslationService {
  constructor(private readonly prisma: DatabaseService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<ITranslation[]> {
    const translationList = await this.prisma.translation.findMany();

    return translationList;
  }

  // get by id
  public async getById(data: ITranslationGetById): Promise<ITranslation> {
    const membership = await this.prisma.translation.findUnique({ where: { id: data.id } });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: ITranslationCreate): Promise<ITranslation> {
    const meetingById = await this.checkMeetingById({ meetingId: data.meetingId });
    if (!meetingById) throw new NotFoundException('meeting is not exist');
    if (meetingById.name !== MeetingEnum.LGA) throw new BadRequestException('incorrect meeting for translation');

    const memberById = await this.checkMemberById({ memberId: data.memberId });
    if (!memberById) throw new NotFoundException('member is not exist');
    if (memberById.membershipId === data.membershipId) throw new BadRequestException('user already have this membership');

    const membershipById = await this.checkMembershipById({ membershipId: data.membershipId });
    if (!membershipById) throw new NotFoundException('membership is not exist');

    await this.updateMemberMembership({ memberId: data.memberId, membershipId: data.membershipId });

    const translationNew = await this.prisma.translation.create({
      data: {
        meetingId: data.meetingId,
        memberId: data.memberId,
        membershipId: data.membershipId,
      },
    });

    return translationNew;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: ITranslationUpdate): Promise<ITranslation> {
    const translationById = await this.checkById({ id: data.id });
    if (!translationById) throw new NotFoundException('cadence is not exist');

    const translationUpdate = await this.prisma.translation.update({
      where: { id: data.id },
      data: {
        meetingId: data.meetingId,
        memberId: data.memberId,
        membershipId: data.membershipId,
      },
    });

    return translationUpdate;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ITranslationDelete): Promise<ITranslation> {
    const translationById = await this.checkById({ id: data.id });
    if (!translationById) throw new NotFoundException('cadence is not exist');

    const translationDelete = await this.prisma.translation.delete({ where: { id: data.id } });

    return translationDelete;
  }

  //
  //
  //

  // check by id
  private async checkById({ id }: { id: string }): Promise<ITranslation> {
    const translation = await this.prisma.translation.findUnique({ where: { id } });
    return translation;
  }

  // check by meetingById
  private async checkMeetingById({ meetingId }: { meetingId: string }): Promise<IMeeting> {
    const meeting = await this.prisma.meeting.findUnique({ where: { id: meetingId } });
    return meeting;
  }

  // check by memberById
  private async checkMemberById({ memberId }: { memberId: string }): Promise<IMember> {
    const member = await this.prisma.member.findUnique({ where: { id: memberId } });
    return member;
  }

  // check by membershipById
  private async checkMembershipById({ membershipId }: { membershipId: string }): Promise<IMembership> {
    const membership = await this.prisma.membership.findUnique({ where: { id: membershipId } });
    return membership;
  }

  // update member membership
  private async updateMemberMembership({ memberId, membershipId }: { memberId: string; membershipId: string }): Promise<IMember> {
    const member = await this.prisma.member.update({
      where: { id: memberId },
      data: { membershipId: membershipId },
    });
    return member;
  }
}

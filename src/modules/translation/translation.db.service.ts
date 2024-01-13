import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import { ITranslation, ITranslationCreate, ITranslationGetById, ITranslationUpdate, ITranslationDelete } from 'src/interfaces/translation.interface';
import { IMeeting } from 'src/interfaces/meeting.interface';
import { IMember } from 'src/interfaces/member/member.type';
import { IMembership } from 'src/interfaces/member/membership.type';

@Injectable()
export class TranslationDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: ITranslationCreate): Promise<ITranslation> {
    const translation = await handlerError(
      this.database.translation.create({
        data: {
          meetingId: data.meetingId,
          memberId: data.memberId,
          membershipId: data.membershipId,
        },
      }),
    );
    return translation;
  }

  /* ----------------  READ  ---------------- */

  // find many
  public async findMany(): Promise<ITranslation[]> {
    const translation = await handlerError(this.database.translation.findMany());
    return translation;
  }

  // find by id
  public async findById({ id }: ITranslationGetById): Promise<ITranslation> {
    const translation = await handlerError(this.database.translation.findUnique({ where: { id } }));
    return translation;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: ITranslationUpdate): Promise<ITranslation> {
    const translation = await handlerError(
      this.database.translation.update({
        where: { id: data.id },
        data: {
          meetingId: data.meetingId,
          memberId: data.memberId,
          membershipId: data.membershipId,
        },
      }),
    );
    return translation;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: ITranslationDelete): Promise<ITranslation> {
    const translation = await handlerError(this.database.translation.delete({ where: { id: data.id } }));
    return translation;
  }

  /* ----------------  CHECK  ---------------- */

  // check by id
  public async checkById({ id }: { id: string }): Promise<ITranslation> {
    const translation = await handlerError(this.database.translation.findUnique({ where: { id } }));
    return translation;
  }

  // check by meetingById
  public async checkMeetingById({ meetingId }: { meetingId: string }): Promise<IMeeting> {
    const meeting = await handlerError(this.database.meeting.findUnique({ where: { id: meetingId } }));
    return meeting;
  }

  // check by memberById
  public async checkMemberById({ memberId }: { memberId: string }): Promise<IMember> {
    const member = await handlerError(this.database.member.findUnique({ where: { id: memberId } }));
    return member;
  }

  // check by membershipById
  public async checkMembershipById({ membershipId }: { membershipId: string }): Promise<IMembership> {
    const membership = await handlerError(this.database.membership.findUnique({ where: { id: membershipId } }));
    return membership;
  }

  // update member membership
  public async updateMemberMembership({ memberId, membershipId }: { memberId: string; membershipId: string }): Promise<IMember> {
    const member = await handlerError(
      this.database.member.update({
        where: { id: memberId },
        data: { membershipId: membershipId },
      }),
    );
    return member;
  }
}

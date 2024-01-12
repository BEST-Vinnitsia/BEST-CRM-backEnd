import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MeetingDbService } from './meeting.db.service';
import {
  IMeeting_create,
  IMeeting_create_RES,
  IMeeting_delete,
  IMeeting_delete_RES,
  IMeeting_get_id,
  IMeeting_get_id_RES,
  IMeeting_get_list_RES,
  IMeeting_update,
  IMeeting_update_RES,
} from 'src/types/meeting.type';
import { AppDbService } from '../app/app.db.service';

@Injectable()
export class MeetingService {
  constructor(
    private readonly meetingDBService: MeetingDbService,
    private readonly appDBService: AppDbService,
  ) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IMeeting_get_list_RES[]> {
    const membershipList = await this.meetingDBService.findMany();
    return membershipList;
  }

  // get by id
  public async getById(data: IMeeting_get_id): Promise<IMeeting_get_id_RES> {
    // checking if the member exists
    const membership = await this.meetingDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IMeeting_create): Promise<IMeeting_create_RES> {
    const newMembership = await this.meetingDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IMeeting_update): Promise<IMeeting_update_RES> {
    const updateMembership = await this.meetingDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IMeeting_delete): Promise<IMeeting_delete_RES> {
    // checking if the member exists
    const membership = await this.meetingDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('cadence is not exist');

    const deleteMembership = await this.meetingDBService.delete(membership);
    return deleteMembership;
  }
}

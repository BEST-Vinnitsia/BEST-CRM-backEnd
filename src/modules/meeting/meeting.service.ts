import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MeetingDbService } from './meeting.db.service';
import { IMeeting, IMeeting_create, IMeeting_delete, IMeeting_get_id, IMeeting_update } from 'src/types/meeting.interface';

@Injectable()
export class MeetingService {
  constructor(private readonly meetingDBService: MeetingDbService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IMeeting[]> {
    const membershipList = await this.meetingDBService.findMany();
    return membershipList;
  }

  // get by id
  public async getById(data: IMeeting_get_id): Promise<IMeeting> {
    // checking if the member exists
    const membership = await this.meetingDBService.findById({ id: data.id });
    if (!membership) throw new NotFoundException('cadence not found');

    return membership;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IMeeting_create): Promise<IMeeting> {
    const newMembership = await this.meetingDBService.create(data);
    return newMembership;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IMeeting_update): Promise<IMeeting> {
    const updateMembership = await this.meetingDBService.update(data);
    return updateMembership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IMeeting_delete): Promise<IMeeting> {
    // checking if the member exists
    const membership = await this.meetingDBService.findById({ id: data.id });
    if (!membership) throw new BadRequestException('cadence is not exist');

    const deleteMembership = await this.meetingDBService.delete(membership);
    return deleteMembership;
  }
}

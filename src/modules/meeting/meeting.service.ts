import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { MeetingDbService } from './meeting.db.service';
import { IMeeting, IMeetingCreate, IMeetingDelete, IMeetingGetById, IMeetingUpdate } from 'src/interfaces/meeting.interface';

@Injectable()
export class MeetingService {
  constructor(private readonly meetingDBService: MeetingDbService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IMeeting[]> {
    const meetingList = await this.meetingDBService.findMany();
    return meetingList;
  }

  // get by id
  public async getById(data: IMeetingGetById): Promise<IMeeting> {
    const meeting = await this.meetingDBService.findById({ id: data.id });
    if (!meeting) throw new NotFoundException('meeting not found');

    return meeting;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IMeetingCreate): Promise<IMeeting> {
    const meetingNew = await this.meetingDBService.create(data);
    return meetingNew;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IMeetingUpdate): Promise<IMeeting> {
    const meetingById = await this.meetingDBService.findById({ id: data.id });
    if (!meetingById) throw new NotFoundException('meeting is not exist');

    const meetingUpdate = await this.meetingDBService.update(data);
    return meetingUpdate;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IMeetingDelete): Promise<IMeeting> {
    const meetingById = await this.meetingDBService.findById({ id: data.id });
    if (!meetingById) throw new NotFoundException('meeting is not exist');

    const meetingDelete = await this.meetingDBService.delete(data);
    return meetingDelete;
  }
}

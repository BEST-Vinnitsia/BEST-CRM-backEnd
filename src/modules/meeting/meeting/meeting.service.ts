import { Injectable } from '@nestjs/common';
import { MeetingDbService } from './meeting.db.service';
import {
  IMeetingCreate,
  IMeetingCreateRes,
  IMeetingGetById,
  IMeetingGetByIdRes,
  IMeetingGetListRes,
} from 'src/types/meeting.type';

@Injectable()
export class MeetingService {
  constructor(private readonly meetingDb: MeetingDbService) {}

  async create(data: IMeetingCreate): Promise<IMeetingCreateRes> {
    const lga = await this.meetingDb.create(data);
    return lga;
  }

  async getList(): Promise<IMeetingGetListRes[]> {
    const lga = await this.meetingDb.findAll();
    return lga;
  }

  async getById(data: IMeetingGetById): Promise<IMeetingGetByIdRes> {
    const lga = await this.meetingDb.findById(data);
    return lga;
  }
}

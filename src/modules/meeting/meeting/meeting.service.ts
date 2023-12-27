import { BadRequestException, Injectable } from '@nestjs/common';
import { MeetingDbService } from './meeting.db.service';
import { IMeeting_Create, IMeeting_Create_Res, IMeeting_GetById, IMeeting_GetById_Res, IMeeting_GetList_Res } from 'src/types/meeting.type';
import { AppDbService } from 'src/app.db.service';

@Injectable()
export class MeetingService {
  constructor(
    private readonly meetingDb: MeetingDbService,
    private readonly appDbService: AppDbService,
  ) {}

  /**
   * create meeting
   */
  async create(data: IMeeting_Create): Promise<IMeeting_Create_Res> {
    // check if cadence is exist
    const cadence = await this.appDbService.findCadenceById({ id: data.cadence_id });
    if (!cadence) throw new BadRequestException('this cadence is not exist');

    // check meeting name
    if (data.name.toLocaleLowerCase() !== 'lga' && data.name.toLocaleLowerCase() !== 'gm') throw new BadRequestException('incorrect meeting name');

    const meeting = await this.meetingDb.create(data);
    return meeting;
  }

  /**
   * get meeting list
   */
  async getList(): Promise<IMeeting_GetList_Res[]> {
    const meetingList = await this.meetingDb.findAll();
    return meetingList;
  }

  /**
   * get meeting by id
   */
  async getById(data: IMeeting_GetById): Promise<IMeeting_GetById_Res> {
    // check if meeting is exist
    const meeting = await this.meetingDb.findById(data);
    if (!meeting) throw new BadRequestException('this meeting is not exist');

    return meeting;
  }
}

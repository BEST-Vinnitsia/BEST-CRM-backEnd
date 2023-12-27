import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import {
  IMeeting_Db_Create,
  IMeeting_Db_Create_Res,
  IMeeting_Db_GetById,
  IMeeting_Db_GetById_Res,
  IMeeting_Db_GetList_Res,
} from 'src/types/meeting.type';
import { handlerError } from 'src/utils/handlerError';

@Injectable()
export class MeetingDbService {
  constructor(private readonly database: DatabaseService) {}

  /**
   * create meeting
   */
  public async create({ date, name, cadence_id }: IMeeting_Db_Create): Promise<IMeeting_Db_Create_Res> {
    const newMeeting = await handlerError(
      this.database.meeting.create({
        data: {
          date,
          name: name.toLocaleLowerCase(),
          cadence_id,
        },
      }),
    );
    return newMeeting;
  }

  /**
   * get meeting list
   */
  public async findAll(): Promise<IMeeting_Db_GetList_Res[]> {
    const meetingList = await handlerError(this.database.meeting.findMany());
    return meetingList;
  }

  /**
   * get meeting by id
   */
  public async findById({ id }: IMeeting_Db_GetById): Promise<IMeeting_Db_GetById_Res> {
    const meeting = await handlerError(this.database.meeting.findUnique({ where: { id } }));
    return meeting;
  }
}

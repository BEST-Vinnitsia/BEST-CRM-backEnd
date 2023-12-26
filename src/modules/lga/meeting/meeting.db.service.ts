import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import {
  IMeetingDbCreate,
  IMeetingDbCreateRes,
  IMeetingDbGetById,
  IMeetingDbGetByIdRes,
  IMeetingDbGetListRes,
} from 'src/types/meeting.type';
import { handlerError } from 'src/utils/handlerError';

@Injectable()
export class MeetingDbService {
  constructor(private readonly database: DatabaseService) {}

  public async create({ date, name, cadence_id }: IMeetingDbCreate): Promise<IMeetingDbCreateRes> {
    const lga = await handlerError(this.database.meeting.create({ data: { date, name, cadence_id } }));
    return lga;
  }

  public async findAll(): Promise<IMeetingDbGetListRes[]> {
    const lga = await handlerError(this.database.meeting.findMany());
    return lga;
  }

  public async findById({ id }: IMeetingDbGetById): Promise<IMeetingDbGetByIdRes> {
    const lga = await handlerError(this.database.meeting.findUnique({ where: { id } }));
    return lga;
  }
}

import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import { IMeeting, IMeetingCreate, IMeetingGetById, IMeetingUpdate, IMeetingDelete } from 'src/interfaces/meeting.interface';

@Injectable()
export class MeetingDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: IMeetingCreate): Promise<IMeeting> {
    const board = await handlerError(
      this.database.meeting.create({
        data: {
          name: data.name.toLocaleUpperCase(),
          date: data.date,
          cadenceId: data.cadenceId,
        },
      }),
    );
    return board;
  }

  /* ----------------  READ  ---------------- */

  // find many
  public async findMany(): Promise<IMeeting[]> {
    const board = await handlerError(this.database.meeting.findMany());
    return board;
  }

  // find by id
  public async findById({ id }: IMeetingGetById): Promise<IMeeting> {
    const board = await handlerError(this.database.meeting.findUnique({ where: { id } }));
    return board;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: IMeetingUpdate): Promise<IMeeting> {
    const board = await handlerError(
      this.database.meeting.update({
        where: { id: data.id },
        data: {
          name: data.name.toLocaleUpperCase(),
          date: data.date,
          cadenceId: data.cadenceId,
        },
      }),
    );
    return board;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IMeetingDelete): Promise<IMeeting> {
    const board = await handlerError(this.database.meeting.delete({ where: { id: data.id } }));
    return board;
  }
}

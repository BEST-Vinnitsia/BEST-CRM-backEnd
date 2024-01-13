import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import { IMeeting, IMeeting_create, IMeeting_get_id, IMeeting_update, IMeeting_delete } from 'src/types/meeting.type';

@Injectable()
export class MeetingDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: IMeeting_create): Promise<IMeeting> {
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
  public async findById({ id }: IMeeting_get_id): Promise<IMeeting> {
    const board = await handlerError(this.database.meeting.findUnique({ where: { id } }));
    return board;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: IMeeting_update): Promise<IMeeting> {
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
  public async delete(data: IMeeting_delete): Promise<IMeeting> {
    const board = await handlerError(this.database.meeting.delete({ where: { id: data.id } }));
    return board;
  }
}

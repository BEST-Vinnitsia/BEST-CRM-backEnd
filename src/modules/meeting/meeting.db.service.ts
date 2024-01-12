import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IMeeting_create,
  IMeeting_create_RES,
  IMeeting_get_id,
  IMeeting_get_id_RES,
  IMeeting_get_list_RES,
  IMeeting_update,
  IMeeting_update_RES,
  IMeeting_delete,
  IMeeting_delete_RES,
} from 'src/types/meeting.type';

@Injectable()
export class MeetingDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: IMeeting_create): Promise<IMeeting_create_RES> {
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
  public async findMany(): Promise<IMeeting_get_list_RES[]> {
    const board = await handlerError(this.database.meeting.findMany());
    return board;
  }

  // find by id
  public async findById({ id }: IMeeting_get_id): Promise<IMeeting_get_id_RES> {
    const board = await handlerError(this.database.meeting.findUnique({ where: { id } }));
    return board;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: IMeeting_update): Promise<IMeeting_update_RES> {
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
  public async delete(data: IMeeting_delete): Promise<IMeeting_delete_RES> {
    const board = await handlerError(this.database.meeting.delete({ where: { id: data.id } }));
    return board;
  }
}

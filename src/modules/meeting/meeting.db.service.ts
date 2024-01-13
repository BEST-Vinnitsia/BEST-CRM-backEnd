import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import { IMeeting, IMeetingCreate, IMeetingGetById, IMeetingUpdate, IMeetingDelete } from 'src/interfaces/meeting.interface';
import { ICadence } from 'src/interfaces/cadence.interface';

@Injectable()
export class MeetingDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: IMeetingCreate): Promise<IMeeting> {
    const meeting = await handlerError(
      this.database.meeting.create({
        data: {
          name: data.name.toLocaleUpperCase(),
          date: data.date,
          cadenceId: data.cadenceId,
        },
      }),
    );
    return meeting;
  }

  /* ----------------  READ  ---------------- */

  // find many
  public async findMany(): Promise<IMeeting[]> {
    const meeting = await handlerError(this.database.meeting.findMany());
    return meeting;
  }

  // find by id
  public async findById({ id }: IMeetingGetById): Promise<IMeeting> {
    const meeting = await handlerError(this.database.meeting.findUnique({ where: { id } }));
    return meeting;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: IMeetingUpdate): Promise<IMeeting> {
    const meeting = await handlerError(
      this.database.meeting.update({
        where: { id: data.id },
        data: {
          name: data.name.toLocaleUpperCase(),
          date: data.date,
          cadenceId: data.cadenceId,
        },
      }),
    );
    return meeting;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IMeetingDelete): Promise<IMeeting> {
    const meeting = await handlerError(this.database.meeting.delete({ where: { id: data.id } }));
    return meeting;
  }

  /* ----------------  CHECK  ---------------- */

  // check by id
  public async checkById({ id }: { id: string }): Promise<IMeeting> {
    const meeting = await handlerError(this.database.meeting.findUnique({ where: { id } }));
    return meeting;
  }

  // check cadence by id
  public async checkCadenceById({ cadenceId }: { cadenceId: string }): Promise<ICadence> {
    const cadence = await handlerError(this.database.cadence.findUnique({ where: { id: cadenceId } }));
    return cadence;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { IMeeting, IMeetingCreate, IMeetingDelete, IMeetingGetById, IMeetingUpdate } from 'src/interfaces/meeting.interface';
import { DatabaseService } from '../database/database.service';
import { ICadence } from 'src/interfaces/cadence.interface';

@Injectable()
export class MeetingService {
  constructor(private readonly prisma: DatabaseService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IMeeting[]> {
    const meetingList = await this.prisma.meeting.findMany();

    return meetingList;
  }

  // get by id
  public async getById(data: IMeetingGetById): Promise<IMeeting> {
    const meeting = await this.prisma.meeting.findUnique({ where: { id: data.id } });
    if (!meeting) throw new NotFoundException('meeting not found');

    return meeting;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IMeetingCreate): Promise<IMeeting> {
    const cadenceById = await this.checkCadenceById({ cadenceId: data.cadenceId });
    if (!cadenceById) throw new NotFoundException('cadence not found');

    const meetingNew = await this.prisma.meeting.create({
      data: {
        name: data.name.toLocaleUpperCase(),
        date: data.date,
        cadenceId: data.cadenceId,
      },
    });

    return meetingNew;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IMeetingUpdate): Promise<IMeeting> {
    const meetingById = await this.checkById({ id: data.id });
    if (!meetingById) throw new NotFoundException('meeting is not exist');

    const meetingUpdate = await this.prisma.meeting.update({
      where: { id: data.id },
      data: {
        name: data.name.toLocaleUpperCase(),
        date: data.date,
        cadenceId: data.cadenceId,
      },
    });

    return meetingUpdate;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IMeetingDelete): Promise<IMeeting> {
    const meetingById = await this.checkById({ id: data.id });
    if (!meetingById) throw new NotFoundException('meeting is not exist');

    const meetingDelete = await this.prisma.meeting.delete({ where: { id: data.id } });

    return meetingDelete;
  }

  //
  //
  //

  // check by id
  private async checkById({ id }: { id: string }): Promise<IMeeting> {
    const meeting = await this.prisma.meeting.findUnique({ where: { id } });
    return meeting;
  }

  // check cadence by id
  private async checkCadenceById({ cadenceId }: { cadenceId: string }): Promise<ICadence> {
    const cadence = await this.prisma.cadence.findUnique({ where: { id: cadenceId } });
    return cadence;
  }
}

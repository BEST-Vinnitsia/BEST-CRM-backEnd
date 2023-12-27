import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { BestEmailDbService } from './bestEmail.db.service';
import {
  IBestEmail_Create,
  IBestEmail_Create_Res,
  IBestEmail_GetListByMemberId,
  IBestEmail_GetListByMemberId_Res,
} from 'src/types/bestEmail.type';
import { AppDbService } from 'src/app.db.service';

@Injectable()
export class BestEmailService {
  constructor(
    private readonly memberBestEmailDb: BestEmailDbService,
    private readonly appDbService: AppDbService,
  ) {}

  /**
   * create member BEST email
   */
  public async create(data: IBestEmail_Create): Promise<IBestEmail_Create_Res> {
    // checking if the member exists
    const member = await this.appDbService.findMemberById({ id: data.member_id });
    if (!member) throw new NotFoundException('member not found');

    // checking if the member already has best email
    const email = await this.memberBestEmailDb.findByMemberId({ member_id: data.member_id });
    if (email.length !== 0) throw new BadRequestException('this member already has BEST email');

    const newEmail = await this.memberBestEmailDb.create(data);
    return newEmail;
  }

  /**
   * get BEST email list by member id
   */
  public async getByMemberId(data: IBestEmail_GetListByMemberId): Promise<IBestEmail_GetListByMemberId_Res[]> {
    // checking if the member exists
    const member = await this.appDbService.findMemberById({ id: data.member_id });
    if (!member) throw new NotFoundException('member not found');

    const emails = await this.memberBestEmailDb.findByMemberId(data);
    return emails;
  }
}

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { EmailDbService } from './email.db.service';
import { IEmail_Create, IEmail_Create_Res, IEmail_GetListByMemberId, IEmail_GetListByMemberId_Res } from 'src/types/email.type';
import { AppDbService } from 'src/app.db.service';

@Injectable()
export class EmailService {
  constructor(
    private readonly memberEmailDb: EmailDbService,
    private readonly appDbService: AppDbService,
  ) {}

  /**
   * create member email
   */
  public async create(data: IEmail_Create): Promise<IEmail_Create_Res> {
    // checking if the member exists
    const member = await this.appDbService.findMemberById({ id: data.member_id });
    if (!member) throw new NotFoundException('member not found');

    // checking if the member already has this email
    const email = await this.memberEmailDb.findByEmailAndMemberId({ email: data.email, member_id: data.member_id });
    if (email) throw new BadRequestException('this member already has this email');

    const newEmail = await this.memberEmailDb.create(data);
    return newEmail;
  }

  /**
   * get email list by member id
   */
  public async getByMemberId(data: IEmail_GetListByMemberId): Promise<IEmail_GetListByMemberId_Res[]> {
    // checking if the member exists
    const member = await this.appDbService.findMemberById({ id: data.member_id });
    if (!member) throw new NotFoundException('member not found');

    const emails = await this.memberEmailDb.findByMemberId(data);
    return emails;
  }
}

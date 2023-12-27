import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PhoneDbService } from './phone.db.service';
import { IPhone_Create, IPhone_Create_Res, IPhone_GetListByMemberId, IPhone_GetListByMemberId_Res } from 'src/types/phone.type';
import { AppDbService } from 'src/app.db.service';

@Injectable()
export class PhoneService {
  constructor(
    private readonly memberPhoneDb: PhoneDbService,
    private readonly appDbService: AppDbService,
  ) {}

  /**
   * create phone
   */
  public async create(data: IPhone_Create): Promise<IPhone_Create_Res> {
    // checking if the member exists
    const member = await this.appDbService.findMemberById({ id: data.member_id });
    if (!member) throw new NotFoundException('member not found');

    const newPhone = await this.memberPhoneDb.create(data);
    return newPhone;
  }

  /**
   * get phone by member id
   */
  public async getByMemberId(data: IPhone_GetListByMemberId): Promise<IPhone_GetListByMemberId_Res[]> {
    // checking if the member exists
    const member = await this.appDbService.findMemberById({ id: data.member_id });
    if (!member) throw new NotFoundException('member not found');

    const phones = await this.memberPhoneDb.findByMemberId(data);
    return phones;
  }
}

import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IMember_create,
  IMember_create_RES,
  IMember_check_email,
  IMember_check_email_RES,
  IMember_get_id,
  IMember_get_id_RES,
  IMember_get_list_RES,
  IMember_check_id,
  IMember_check_id_RES,
  IMember_delete_id,
  IMember_delete_id_RES,
  IMember_delete_array,
  IMember_delete_array_RES,
  IMember_update,
  IMember_update_RES,
} from 'src/types/member/member.type';

@Injectable()
export class MemberDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: IMember_create): Promise<IMember_create_RES> {
    const member = await handlerError(
      this.database.member.create({
        data: {
          membership_id: data.membership_id,
          //
          email: data.email.toLocaleLowerCase(),
          password: data.password,
          best_email: data.best_email ? data.best_email.toLocaleLowerCase() : null,
          //
          full_name: data.full_name.toLocaleLowerCase(),
          middle_name: data.middle_name.toLocaleLowerCase(),
          surname: data.surname.toLocaleLowerCase(),
          birthday: data.birthday,
          //
          faculty: data.faculty.toLocaleLowerCase(),
          group: data.group.toLocaleLowerCase(),
          //
          clothing_size: data.clothing_size ? data.clothing_size.toLocaleUpperCase() : null,
          home_address: data.home_address ? data.home_address.toLocaleLowerCase() : null,
        },
        include: { membership: true },
      }),
    );
    return member;
  }

  /* ----------------  READ  ---------------- */

  // find many
  public async findMany(): Promise<IMember_get_list_RES[]> {
    const member = await handlerError(
      this.database.member.findMany({
        include: { membership: true },
      }),
    );
    return member;
  }

  // find by id
  public async findById({ id }: IMember_get_id): Promise<IMember_get_id_RES> {
    const member = await handlerError(
      this.database.member.findUnique({
        where: { id },
        include: { membership: true, member_email: true, member_phone: true, member_social_network: true },
      }),
    );
    return member;
  }

  // check by id
  public async checkById({ id }: IMember_check_id): Promise<IMember_check_id_RES> {
    const member = await handlerError(this.database.member.findUnique({ where: { id } }));
    return member;
  }

  // check by email
  public async checkByEmail({ email }: IMember_check_email): Promise<IMember_check_email_RES> {
    const member = await handlerError(this.database.member.findUnique({ where: { email } }));
    return member;
  }

  /* ----------------  UPDATE  ---------------- */

  public async update(data: IMember_update): Promise<IMember_update_RES> {
    const member = await handlerError(
      this.database.member.update({
        where: { id: data.id },
        data: {
          membership_id: data.membership_id,
          //
          email: data.email.toLocaleLowerCase(),
          password: data.password,
          best_email: data.best_email ? data.best_email.toLocaleLowerCase() : null,
          //
          full_name: data.full_name.toLocaleLowerCase(),
          middle_name: data.middle_name.toLocaleLowerCase(),
          surname: data.surname.toLocaleLowerCase(),
          birthday: data.birthday,
          //
          faculty: data.faculty.toLocaleLowerCase(),
          group: data.group.toLocaleLowerCase(),
          //
          clothing_size: data.clothing_size ? data.clothing_size.toLocaleUpperCase() : null,
          home_address: data.home_address ? data.home_address.toLocaleLowerCase() : null,
        },
        include: { membership: true },
      }),
    );
    return member;
  }

  /* ----------------  DELETE  ---------------- */

  // delete by id
  public async deleteById({ id }: IMember_delete_id): Promise<IMember_delete_id_RES> {
    const member = await handlerError(this.database.member.delete({ where: { id } }));
    return { id: [member.id] };
  }

  // delete array by id
  public async deleteArrayById(data: IMember_delete_array): Promise<IMember_delete_array_RES> {
    const deletedMembers: string[] = [];

    for (const memberData of data.id) {
      try {
        const member = await this.database.member.delete({ where: { id: memberData } });
        deletedMembers.push(member.id);
      } catch (error) {
        console.error(error);
        deletedMembers.push(null);
      }
    }

    return { id: deletedMembers };
  }
}

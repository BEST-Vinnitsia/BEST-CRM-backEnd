import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IMembership,
  IMembership_create,
  IMembership_check_name,
  IMembership_get_id,
  IMembership_delete,
  IMembership_update,
} from 'src/types/member/membership.type';

@Injectable()
export class MembershipDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  CREATE  ---------------- */
  public async create(data: IMembership_create): Promise<IMembership> {
    const membership = await handlerError(
      this.database.membership.create({
        data: { name: data.name.toLocaleLowerCase() },
      }),
    );
    return membership;
  }

  /* ----------------  READ  ---------------- */

  // find many
  public async findMany(): Promise<IMembership[]> {
    const membership = await handlerError(this.database.membership.findMany());
    return membership;
  }

  // find by id
  public async findById({ id }: IMembership_get_id): Promise<IMembership> {
    const membership = await handlerError(this.database.membership.findUnique({ where: { id } }));
    return membership;
  }

  // check by name
  public async checkByName({ name }: IMembership_check_name): Promise<IMembership> {
    const membership = await handlerError(
      this.database.membership.findUnique({
        where: { name: name.toLocaleLowerCase() },
      }),
    );
    return membership;
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(data: IMembership_update): Promise<IMembership> {
    const membership = await handlerError(
      this.database.membership.update({
        where: { id: data.id },
        data: { name: data.name.toLocaleLowerCase() },
      }),
    );
    return membership;
  }

  /* ----------------  DELETE  ---------------- */
  public async delete(data: IMembership_delete): Promise<IMembership> {
    const membership = await handlerError(this.database.membership.delete({ where: { id: data.id } }));
    return membership;
  }
}

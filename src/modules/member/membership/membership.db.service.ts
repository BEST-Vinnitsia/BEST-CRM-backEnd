import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import {
  IMembershipDbCreate,
  IMembershipDbCreateRes,
  IMembershipDbGetById,
  IMembershipDbGetByIdRes,
  IMembershipDbGetListRes,
} from 'src/types/membership.type';

@Injectable()
export class MembershipDbService {
  constructor(private readonly database: DatabaseService) {}

  public async create({ name }: IMembershipDbCreate): Promise<IMembershipDbCreateRes> {
    const user = await handlerError(this.database.membership.create({ data: { name } }));
    return user;
  }

  public async findAll(): Promise<IMembershipDbGetListRes[]> {
    const user = await handlerError(this.database.membership.findMany());
    return user;
  }

  public async findById({ id }: IMembershipDbGetById): Promise<IMembershipDbGetByIdRes> {
    const user = await handlerError(
      this.database.membership.findUnique({
        where: { id },
      }),
    );
    return user;
  }
}

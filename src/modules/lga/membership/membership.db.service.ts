import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { handlerError } from 'src/utils/handlerError';
import { IMembership, IMembershipGetById } from 'src/types/membership.type';

@Injectable()
export class MembershipDbService {
  constructor(private readonly database: DatabaseService) {}

  public async findAll(): Promise<IMembership[]> {
    const user = await handlerError(this.database.membership.findMany());
    return user;
  }

  public async findById({ id }: IMembershipGetById): Promise<IMembership> {
    const user = await handlerError(
      this.database.membership.findUnique({
        where: { id },
      }),
    );
    return user;
  }
}

import { Injectable } from '@nestjs/common';
import { DatabaseService } from './modules/database/database.service';
import { handlerError } from './utils/handlerError';

@Injectable()
export class AppDbService {
  constructor(private readonly database: DatabaseService) {}

  public async findMemberById({ id }: { id: string }) {
    const member = await handlerError(this.database.member.findUnique({ where: { id } }));
    delete member.password;
    return member;
  }
}

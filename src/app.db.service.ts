import { Injectable } from '@nestjs/common';
import { DatabaseService } from './modules/database/database.service';
import { handlerError } from './utils/handlerError';

@Injectable()
export class AppDbService {
  constructor(private readonly database: DatabaseService) {}

  /* ----------------  member  ---------------- */

  // find list by membership
  public async findListByMembership({ membershipId }: { membershipId: string }) {
    const memberList = await handlerError(
      this.database.member.findMany({
        where: { membershipId },
        include: { membership: true },
      }),
    );
    return memberList;
  }
}

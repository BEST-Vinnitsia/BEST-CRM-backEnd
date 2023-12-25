import { Module } from '@nestjs/common';
import { LgaController } from './lga/lga.controller';
import { DatabaseModule } from '../database/database.module';
import { LgaService } from './lga/lga.service';
import { LgaDbService } from './lga/lga.db.service';
import { LgaBoardController } from './board/lgaBoard.controller';
import { LgaBoardService } from './board/lgaBoard.service';
import { LgaBoardDbService } from './board/lgaBoard.db.service';
import { LgaBoardToMemberController } from './board_to_member/lgaBoardToMember.controller';
import { LgaBoardToMemberService } from './board_to_member/lgaBoardToMember.service';
import { LgaBoardToMemberDbService } from './board_to_member/lgaBoardToMember.db.service';

@Module({
  imports: [DatabaseModule],
  controllers: [LgaController, LgaBoardController, LgaBoardToMemberController],
  providers: [
    LgaService,
    LgaDbService,
    LgaBoardService,
    LgaBoardDbService,
    LgaBoardToMemberService,
    LgaBoardToMemberDbService,
  ],
})
export class LgaModule {}

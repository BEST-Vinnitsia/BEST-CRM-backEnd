import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';

// Member
import { EmailController } from './email.controller';
import { EmailService } from './email.service';

@Module({
    imports: [DatabaseModule],
    controllers: [EmailController],
    providers: [EmailService],
})
export class EmailModule {}

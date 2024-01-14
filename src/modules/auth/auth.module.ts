import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ConfigModule } from '@nestjs/config';

// jwt
import { JwtModule } from '@nestjs/jwt';
import { AtStrategy, RtStrategy } from '../../common/passport';

// Auth
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),

    JwtModule.register({}),

    DatabaseModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AtStrategy, RtStrategy],
})
export class AuthModule {}

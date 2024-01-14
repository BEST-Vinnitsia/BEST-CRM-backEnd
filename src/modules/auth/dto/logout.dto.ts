import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IAuthLogout } from 'src/interfaces/auth.interface';

export class LogoutDto implements IAuthLogout {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  refreshToken: string;
}

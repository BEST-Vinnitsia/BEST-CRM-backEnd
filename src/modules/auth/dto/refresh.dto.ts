import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IAuthRefresh } from 'src/interfaces/auth.interface';

export class RefreshDto implements IAuthRefresh {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  refreshToken: string;
}

import { IsNotEmpty, IsString, IsBoolean, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CoordinatorToMemberCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  cadenceId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  coordinatorId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  memberId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isLeader: boolean;
}

import { IsBoolean, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICoordinatorToMemberUpdate } from 'src/interfaces/coordinator-to-member.interface';
import { randomUUID } from 'crypto';

export class CoordinatorToMemberUpdateDto implements ICoordinatorToMemberUpdate {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;

  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  cadenceId: string;

  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  coordinatorId: string;

  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  memberId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isLeader: boolean;
}

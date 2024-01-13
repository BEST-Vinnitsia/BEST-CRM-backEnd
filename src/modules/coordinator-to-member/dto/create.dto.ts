import { IsNotEmpty, IsString, IsBoolean, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICoordinatorToMemberCreate } from 'src/interfaces/coordinator-to-member.interface';
import { randomUUID } from 'crypto';

export class CoordinatorToMemberCreateDto implements ICoordinatorToMemberCreate {
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

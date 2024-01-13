import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICoordinatorToMemberDelete } from 'src/interfaces/coordinator-to-member.interface';
import { randomUUID } from 'crypto';

export class CoordinatorToMemberDeleteDto implements ICoordinatorToMemberDelete {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}

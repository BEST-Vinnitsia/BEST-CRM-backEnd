import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICoordinatorToMemberGetById } from 'src/interfaces/coordinator-to-member.interface';
import { randomUUID } from 'crypto';

export class CoordinatorToMemberGetByIdDto implements ICoordinatorToMemberGetById {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}

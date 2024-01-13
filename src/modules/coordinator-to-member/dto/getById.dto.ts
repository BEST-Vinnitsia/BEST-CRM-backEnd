import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ICoordinatorToMemberGetById } from 'src/interfaces/coordinator-to-member.interface';

export class CoordinatorToMemberGetByIdDto implements ICoordinatorToMemberGetById {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}

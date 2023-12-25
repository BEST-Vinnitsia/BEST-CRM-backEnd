import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CoordinatorToMemberGetByIdDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}

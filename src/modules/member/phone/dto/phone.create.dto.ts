import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class Phone_Create_Dto {
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  member_id: string;

  @IsNotEmpty()
  @IsString()
  phone: string;
}

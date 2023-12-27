import { IsNotEmpty, IsString } from 'class-validator';

export class Membership_Create_Dto {
  @IsNotEmpty()
  @IsString()
  name: string;
}

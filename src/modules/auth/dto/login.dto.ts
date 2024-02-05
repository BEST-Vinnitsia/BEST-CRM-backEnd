import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail, Matches } from 'class-validator';
import { Regex } from 'src/constants/regex.constant';
import { IAuthLogin } from 'src/interfaces/secure/auth.interface';

export class LoginDto implements IAuthLogin {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  login: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(Regex.member.password, { message: 'Incorrect password' })
  password: string;
}

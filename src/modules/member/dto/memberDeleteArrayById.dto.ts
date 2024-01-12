import { IsNotEmpty, IsString, IsUUID, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MemberDeleteArrayByIdDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString({ each: true })
  @IsUUID('4', { each: true })
  id: string[];
}

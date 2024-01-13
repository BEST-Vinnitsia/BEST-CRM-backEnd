import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ClothingSizeEnum } from 'src/constants/enums';
import { IMember } from 'src/interfaces/member/member.type';

export class MemberDto implements IMember {
  @ApiProperty({ example: randomUUID() })
  id: string;

  @ApiProperty({ example: randomUUID() })
  membershipId: string;

  //

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  bestEmail: string;

  //

  @ApiProperty()
  surname: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty()
  middleName: string;

  @ApiProperty()
  birthday: Date;

  //

  @ApiProperty()
  group: string;

  @ApiProperty()
  faculty: string;

  //

  @ApiProperty({ enum: ClothingSizeEnum })
  clothingSize: string;

  @ApiProperty()
  homeAddress: string;

  //

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

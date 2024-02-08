import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IBoardToMemberDeleteArray } from '../../../interfaces/board/board-to-member.interface';
import { randomUUID } from 'crypto';

export class BoardToMemberDeleteArrayDto implements IBoardToMemberDeleteArray {
    @ApiProperty({ example: [randomUUID()] })
    @IsNotEmpty()
    @IsString({ each: true })
    @IsArray()
    @IsUUID('4', { each: true })
    boardToMemberId: string[];
}

import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IBoardDeleteArray } from 'src/interfaces/board/board.interface';
import { randomUUID } from 'crypto';

export class DeleteArrayDto implements IBoardDeleteArray {
    @ApiProperty({ example: [randomUUID()] })
    @IsNotEmpty()
    @IsString({ each: true })
    @IsArray()
    @IsUUID('4', { each: true })
    boardsId: string[];
}

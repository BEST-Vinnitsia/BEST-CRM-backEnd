import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { ICoordinatorToMemberDeleteArray } from '../../../interfaces/coordinator/coordinator-to-member.interface';

export class CoordinatorToMemberDeleteArrayDto implements ICoordinatorToMemberDeleteArray {
    @ApiProperty({ example: [randomUUID()] })
    @IsNotEmpty()
    @IsString({ each: true })
    @IsArray()
    @IsUUID('4', { each: true })
    coordinatorToMemberId: string[];
}

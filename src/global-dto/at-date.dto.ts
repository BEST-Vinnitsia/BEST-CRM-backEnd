import { ApiProperty } from '@nestjs/swagger';

export class AtDateDto {
    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}

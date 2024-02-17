import { ApiProperty } from '@nestjs/swagger';

export class AtDateDto_c {
    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;
}

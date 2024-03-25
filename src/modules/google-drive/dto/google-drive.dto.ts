import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

//
// Event category
//

class EventCategoryPositionDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    role: string;
}

class EventCategoryNewPositionDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    role: string;
}

//

export class EventCategoryDetailsDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    id: string;
}

export class EventCategoryCreateDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    type: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    status: string;
}

export class EventCategoryUpdateDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    type: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    status: string;

    @ApiProperty({ type: [EventCategoryPositionDto] })
    @ValidateNested({ each: true })
    @Type(() => EventCategoryPositionDto)
    positions: EventCategoryPositionDto[];

    @ApiProperty({ type: [EventCategoryNewPositionDto] })
    @ValidateNested({ each: true })
    @Type(() => EventCategoryNewPositionDto)
    newPositions: EventCategoryNewPositionDto[];
}

export class EventCategoryDelete {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    id: string;
}

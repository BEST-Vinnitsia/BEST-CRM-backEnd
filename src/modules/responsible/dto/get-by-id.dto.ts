import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { IResponsibleGetById } from '../../../interfaces/event/responsible.interface';

export class ResponsibleGetByIdDto implements IResponsibleGetById {
  @ApiProperty({ example: randomUUID() })
  @IsNotEmpty()
  @IsString()
  @IsUUID('4')
  id: string;
}

import { Body, Controller, Get, Post, Query, Delete, Put } from '@nestjs/common';
import { CoordinatorToMemberService } from './coordinatorToMember.service';
import { CoordinatorToMemberGetByIdDto } from './dto/getById.dto';
import { CoordinatorToMemberCreateDto } from './dto/create.dto';
import { CoordinatorToMemberUpdateDto } from './dto/update.dto';
import { CoordinatorToMemberDeleteDto } from './dto/delete.dto';
import { ApiCreatedResponse, ApiTags, ApiSecurity } from '@nestjs/swagger';

@ApiSecurity('basic')
@ApiTags('Coordinator to member')
@Controller('api/v/1/coordinator-to-member')
export class CoordinatorToMemberController {
  constructor(private readonly coordinatorToMemberService: CoordinatorToMemberService) {}

  /* ----------------  GET  ---------------- */

  @Get('list')
  @ApiCreatedResponse()
  async list() {
    return await this.coordinatorToMemberService.getList();
  }

  @Get('by-id')
  @ApiCreatedResponse()
  async byId(@Query() data: CoordinatorToMemberGetByIdDto) {
    return await this.coordinatorToMemberService.getById(data);
  }

  /* ----------------  POST  ---------------- */
  @Post('create')
  @ApiCreatedResponse()
  async create(@Body() data: CoordinatorToMemberCreateDto) {
    return await this.coordinatorToMemberService.create(data);
  }

  /* ----------------  PUT  ---------------- */
  @Put('by-id')
  @ApiCreatedResponse()
  async update(@Body() data: CoordinatorToMemberUpdateDto) {
    return await this.coordinatorToMemberService.update(data);
  }

  /* ----------------  DELETE  ---------------- */
  @Delete('by-id')
  @ApiCreatedResponse()
  async delete(@Query() data: CoordinatorToMemberDeleteDto) {
    return await this.coordinatorToMemberService.delete(data);
  }
}

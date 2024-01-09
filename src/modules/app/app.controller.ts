import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IServerInfo } from '../../types/serverInfo.type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  serverInfo(): IServerInfo {
    return this.appService.serverInfo();
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  serverInfo(): any {
    return {
      name: 'BEST vinnie CRM System',
      version: 'v0.1',
      api: {
        lastVersion: 'v1',
        supportedVersion: ['v1'],
      },
      documentation: {
        database: 'https://github.com/ZhVladyslav/BEST_CRM/tree/main/Documentation/Database',
        api: {
          v1: 'https://github.com/ZhVladyslav/BEST_CRM/tree/main/Documentation/API%20V1',
        },
      },
      developers: {
        backEnd: [],
        frontEnd: [],
        designer: [],
      },
    };
  }
}

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class SettingGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const status = process.env.RUN_MODE;

    console.log(status);

    if (!status) {
      return false;
    } else if (status === 'setting' || status === 'dev') {
      return true;
    }

    return false;
  }
}

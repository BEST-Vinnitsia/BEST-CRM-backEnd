import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class SettingGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const status = process.env.RUN_MODE;
    if (status === 'setting') return true;

    return false;
  }
}

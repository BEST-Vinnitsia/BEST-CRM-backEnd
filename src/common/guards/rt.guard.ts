import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class RtGuard extends AuthGuard('jwt-refresh') {
  constructor() {
    super();
  }

  canActivate(context: ExecutionContext) {
    const disableStatus = process.env.REFRESH_TOKEN_GUARD_DISABLE;
    if (disableStatus === 'true') return true;

    return super.canActivate(context);
  }
}

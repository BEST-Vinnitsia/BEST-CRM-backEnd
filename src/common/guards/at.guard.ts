import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class AtGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const disableStatus = process.env.ACCESS_TOKEN_GUARD_DISABLE;
    if (disableStatus === 'true') return true;

    const isPublic = this.reflector.getAllAndOverride('isPublic', [context.getHandler(), context.getClass()]);
    if (isPublic) return true;

    return super.canActivate(context);
  }
}

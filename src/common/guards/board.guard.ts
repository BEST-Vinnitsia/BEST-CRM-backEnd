import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { IAccessToken } from 'src/interfaces/token.interface';
import { Claim } from '../decorators';

@Injectable()
export class BoardGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const claim = this.reflector.get(Claim, context.getHandler());
    if (!claim) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const accessToken = request.user as IAccessToken;
    const boardClaims = accessToken.permission.board;

    let haveAccess = true;

    for (let i = 0; i < claim.length; i++) {
      const checkClaim = boardClaims.includes(claim[i]);
      if (!checkClaim) {
        haveAccess = false;
        break;
      }
    }

    return haveAccess;
  }
}

import { Injectable, CanActivate, ExecutionContext, BadRequestException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IAccessToken } from 'src/interfaces/secure/token.interface';
import { Claim } from '../decorators';

@Injectable()
export class CoordinatorGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext) {
        const disableStatus = process.env.COORDINATOR_GUARD_DISABLE;
        if (disableStatus === 'true') return true;

        const claim = this.reflector.get(Claim, context.getHandler());
        if (!claim) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const accessToken = request.user as IAccessToken;
        if (!accessToken) throw new BadRequestException('incorrect token');

        const coordinatorClaims = accessToken.permissions;

        let haveAccess = true;

        for (let i = 0; i < claim.length; i++) {
            const checkClaim = coordinatorClaims.includes(claim[i]);
            if (!checkClaim) {
                haveAccess = false;
                break;
            }
        }

        return haveAccess;
    }
}

import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { IAccessToken, IRefreshToken } from 'src/interfaces/token.interface';
import { DatabaseService } from 'src/modules/database/database.service';

@Injectable()
export class UpdateTokenGuard implements CanActivate {
  constructor(private readonly prisma: DatabaseService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const accessToken = request.user as IAccessToken | IRefreshToken;
    const refreshTokenId = accessToken.refreshTokenId;

    const refreshTokenInDb = await this.prisma.refreshToken.findUnique({ where: { id: refreshTokenId } });

    if (refreshTokenInDb.needUpdate === false) return true;
    else if (refreshTokenInDb.needUpdate === true) throw new UnauthorizedException(['need update tokens', '0x401']);
  }
}

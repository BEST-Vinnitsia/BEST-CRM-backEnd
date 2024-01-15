import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, Logger, InternalServerErrorException } from '@nestjs/common';
import { IAccessToken, IRefreshToken } from 'src/interfaces/token.interface';
import { DatabaseService } from 'src/modules/database/database.service';

@Injectable()
export class UpdateTokenGuard implements CanActivate {
  logger = new Logger(UpdateTokenGuard.name);
  constructor(private readonly prisma: DatabaseService) {}

  async canActivate(context: ExecutionContext) {
    try {
      const request = context.switchToHttp().getRequest();
      const accessToken = request.user as IAccessToken | IRefreshToken;
      const refreshTokenId = accessToken.refreshTokenId;

      const refreshTokenInDb = await this.prisma.refreshToken.findUnique({ where: { id: refreshTokenId } });
      if (!refreshTokenInDb) throw new UnauthorizedException();

      if (refreshTokenInDb.needUpdate === false) {
        return true;
      } else if (refreshTokenInDb.needUpdate === true) {
        throw new UnauthorizedException(['need update tokens', '0x401']);
      }
    } catch (error) {
      this.logger.error(error.stack);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}

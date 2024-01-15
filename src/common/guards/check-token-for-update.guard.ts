import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, Logger, InternalServerErrorException } from '@nestjs/common';
import { IAccessToken, IRefreshToken } from 'src/interfaces/token.interface';
import { DatabaseService } from 'src/modules/database/database.service';

@Injectable()
export class CheckTokenForUpdateGuard implements CanActivate {
  logger = new Logger(CheckTokenForUpdateGuard.name);

  constructor(private readonly prisma: DatabaseService) {}

  async canActivate(context: ExecutionContext) {
    try {
      const disableStatus = process.env.CHECK_TOKEN_GUARD_DISABLE;
      if (disableStatus === 'true') return true;
      
      const request = context.switchToHttp().getRequest();
      const accessToken = request.user as IAccessToken | IRefreshToken;
      const refreshTokenId = accessToken.refreshTokenId;

      const refreshTokenInDb = await this.prisma.refreshToken.findUnique({ where: { id: refreshTokenId } });
      if (!refreshTokenInDb) throw new UnauthorizedException();

      return true;
    } catch (error) {
      this.logger.error(error.stack);
      throw new InternalServerErrorException('Internal Server Error');
    }
  }
}

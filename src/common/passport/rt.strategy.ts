import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IRefreshTokenPayload } from 'src/interfaces/token.interface';

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // ignoreExpiration: false,
      secretOrKey: process.env.SECRET_REFRESH_TOKEN,
      // passReqToCallback: true,
    });
  }

  validate(payload: IRefreshTokenPayload) {
    return payload;
  }
}

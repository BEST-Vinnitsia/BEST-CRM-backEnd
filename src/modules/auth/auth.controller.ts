import { Body, Controller, Post, UseGuards, Ip } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { SettingGuard, RtGuard, CheckTokenForUpdateGuard, CheckTokenGuard } from 'src/common/guards';
import { GetTokenPayload, Public } from 'src/common/decorators';
import { IAccessToken, IRefreshToken } from 'src/interfaces/token.interface';

@ApiTags('Auth')
@Controller('api/v/1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(SettingGuard)
  @Post('login')
  @ApiCreatedResponse()
  async login(
    @Body() dto: LoginDto, //
    @Ip() ip: string,
  ) {
    return await this.authService.login(dto, ip);
  }

  // @ApiCreatedResponse()
  // @Post('registration')
  // async registration(@Body() dto: RegistrationDto) {
  //   return await this.authService.registration(dto);
  // }

  @Public()
  @UseGuards(RtGuard, CheckTokenGuard)
  @Post('refresh')
  @ApiCreatedResponse()
  async refresh(@GetTokenPayload() refresh: IRefreshToken) {
    return await this.authService.refresh(refresh);
  }

  @Public()
  @UseGuards(RtGuard, CheckTokenForUpdateGuard)
  @Post('update')
  @ApiCreatedResponse()
  async update(
    @GetTokenPayload() refresh: IRefreshToken, //
    @Ip() ip: string,
  ) {
    return await this.authService.update(refresh, ip);
  }

  @Post('logout')
  @ApiCreatedResponse()
  async logout(@GetTokenPayload() access: IAccessToken) {
    return await this.authService.logout(access);
  }
}

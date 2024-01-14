import { Body, Controller, Post, UseGuards, Ip } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RefreshDto } from './dto/refresh.dto';
import { LoginDto } from './dto/login.dto';
import { LogoutDto } from './dto/logout.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { RtGuard } from 'src/common/guards';
import { GetAtPayload, Public } from 'src/common/decorators';
import { IAccessToken } from 'src/interfaces/token.interface';

@ApiTags('Auth')
@Controller('api/v/1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
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
  @UseGuards(RtGuard)
  @Post('refresh')
  @ApiCreatedResponse()
  async refresh(/* @Body() dto: RefreshDto, */ @GetAtPayload() access: IAccessToken) {
    console.log(access);
    // return await this.authService.refresh(dto);
  }

  @Post('logout')
  @ApiCreatedResponse()
  async logout(@Body() dto: LogoutDto) {
    return await this.authService.logout(dto);
  }
}

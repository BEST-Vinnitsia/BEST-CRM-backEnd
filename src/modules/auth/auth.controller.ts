import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CheckTokenForUpdateGuard, CheckTokenGuard, RtGuard } from 'src/common/guards';
import { GetTokenPayload, Public } from 'src/common/decorators';
import { IAccessToken, IRefreshToken } from 'src/interfaces/secure/token.interface';
import { v2 } from '../../constants/api-version';

@ApiTags('Auth')
@Controller(`${v2}/auth`)
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Public()
    @Post('login')
    @ApiCreatedResponse()
    async login(
        @Body() dto: LoginDto, //
        // @Ip() ip: string,
    ) {
        return await this.authService.login(dto);
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
        // @Ip() ip: string,
    ) {
        return await this.authService.update(refresh);
    }

    @Post('logout')
    @ApiCreatedResponse()
    async logout(@GetTokenPayload() access: IAccessToken) {
        return await this.authService.logout(access);
    }
}

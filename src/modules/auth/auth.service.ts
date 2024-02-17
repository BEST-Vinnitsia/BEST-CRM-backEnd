import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IAuthLogin } from 'src/interfaces/secure/auth.interface';
import { IAccessToken, IRefreshToken, ITokenPayload } from 'src/interfaces/secure/token.interface';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

type TokenType = 'access' | 'refresh';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwtService: JwtService,
    ) {}

    /* ----------------  LOGIN  ---------------- */
    public async login(dto: IAuthLogin): Promise<{ access: string; refresh: string }> {
        const findMember = await this.prisma.member.findUnique({ where: { login: dto.login } });
        if (!findMember) throw new BadRequestException('incorrect email or password');

        const isMatch = await bcrypt.compare(dto.password, findMember.password);
        if (!isMatch) throw new BadRequestException('incorrect email or password');

        const newRefreshTokenInDb = await this.prisma.refreshToken.create({
            data: { memberId: findMember.id, needUpdate: false },
        });

        const tokenPayload: ITokenPayload = {
            refreshTokenId: newRefreshTokenInDb.id,
            memberId: findMember.id,
            membershipName: findMember.membership,
            name: findMember.name,
            surname: findMember.surname,
            claims: [],
        };

        const refresh = await this.generateToken('refresh', tokenPayload);
        const access = await this.generateToken('access', tokenPayload);

        return { access, refresh };
    }

    /* ----------------  REGISTRATION  ---------------- */
    // public async registration(dto: IAuthRegistration): Promise<{ message: string }> {
    //   return { message: string };
    // }

    /* ----------------  REFRESH  ---------------- */
    public async refresh(refresh: IRefreshToken): Promise<{ access: string }> {
        const tokenPayload: ITokenPayload = {
            refreshTokenId: refresh.refreshTokenId,
            memberId: refresh.memberId,
            membershipName: refresh.membershipName,
            name: refresh.name,
            surname: refresh.surname,
            claims: [],
        };

        const newAccessToken = await this.generateToken('access', tokenPayload);

        return { access: newAccessToken };
    }

    /* ----------------  UPDATE  ---------------- */
    public async update(refresh: IRefreshToken): Promise<{ access: string; refresh: string }> {
        const findMember = await this.prisma.member.findUnique({ where: { id: refresh.memberId } });
        if (!findMember) throw new BadRequestException('incorrect token');

        const newRefreshTokenInDb = await this.prisma.refreshToken.create({
            data: { memberId: findMember.id, needUpdate: false },
        });

        await this.prisma.refreshToken.delete({ where: { id: refresh.refreshTokenId } });

        const tokenPayload: ITokenPayload = {
            refreshTokenId: newRefreshTokenInDb.id,
            memberId: findMember.id,
            membershipName: findMember.membership,
            name: findMember.name,
            surname: findMember.surname,
            claims: [],
        };

        const generatedRefresh = await this.generateToken('refresh', tokenPayload);
        const access = await this.generateToken('access', tokenPayload);

        return { access, refresh: generatedRefresh };
    }

    /* ----------------  LOGOUT  ---------------- */
    public async logout(access: IAccessToken): Promise<{ message: string }> {
        const deleteOndToken = await this.prisma.refreshToken.delete({ where: { id: access.refreshTokenId } });
        if (!deleteOndToken) throw new InternalServerErrorException('failed delete session');

        return { message: 'session is closed' };
    }

    //
    //
    //

    private async generateToken(tokenType: TokenType, payload: ITokenPayload) {
        return this.jwtService.signAsync(
            {
                ...payload,
                aud: 'BEST CRM System',
                iss: 'BEST CRM System',
            },
            {
                secret: process.env[tokenType === 'access' ? 'SECRET_ACCESS_TOKEN' : 'SECRET_REFRESH_TOKEN'],
                expiresIn: tokenType === 'access' ? 60 * 15 : 60 * 60 * 24 * 7,
            },
        );
    }
}

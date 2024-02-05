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
        const findMember = await this.getMemberFullInfo({ login: dto.login });
        if (!findMember) throw new BadRequestException('incorrect email or password');

        const isMatch = await bcrypt.compare(dto.password, findMember.password);
        if (!isMatch) throw new BadRequestException('incorrect email or password');

        const newRefresh = await this.createRefreshInDb({ memberId: findMember.id });

        const tokenPayload: ITokenPayload = {
            refreshTokenId: newRefresh.id,
            memberId: findMember.id,
            membershipName: findMember.membership,
            fullName: findMember.fullName,
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
        const newAccessToken = await this.generateToken('access', {
            refreshTokenId: refresh.refreshTokenId,
            memberId: refresh.memberId,
            membershipName: refresh.membershipName,
            fullName: refresh.fullName,
            surname: refresh.surname,
            claims: [],
        });

        return { access: newAccessToken };
    }

    /* ----------------  UPDATE  ---------------- */
    public async update(refresh: IRefreshToken): Promise<{ access: string; refresh: string }> {
        const findMember = await this.getMemberFullInfo({ id: refresh.memberId });
        if (!findMember) throw new BadRequestException('incorrect email or password');

        const newRefresh = await this.createRefreshInDb({ memberId: findMember.id });
        await this.prisma.refreshToken.delete({ where: { id: refresh.refreshTokenId } });

        const tokenPayload: ITokenPayload = {
            refreshTokenId: newRefresh.id,
            memberId: findMember.id,
            membershipName: findMember.membership,
            fullName: findMember.fullName,
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

    private async getMemberFullInfo({ id, login }: { id?: string; login?: string }) {
        if (!id && !login) return;

        // const some = {
        //     boardToMember: {
        //         some: {
        //             exclure: false,
        //             board: { isActive: true },
        //             cadence: { isEnd: false },
        //         },
        //     },
        //     coordinatorToMember: {
        //         some: {
        //             exclure: false,
        //             coordinator: { isActive: true },
        //             cadence: { isEnd: false },
        //         },
        //     },
        //     committeeToMember: {
        //         some: {
        //             exclure: false,
        //             committee: { isActive: true },
        //             cadence: { isEnd: false },
        //         },
        //     },
        // };
        //
        // const include = {
        //     boardToMember: { include: { board: true, cadence: true } },
        //     coordinatorToMember: { include: { coordinator: true, cadence: true } },
        //     committeeToMember: { include: { committee: true, cadence: true } },
        // };

        if (id) {
            return this.prisma.member.findUnique({
                where: { id },
            });
        }
        return this.prisma.member.findUnique({
            where: { login },
        });
    }

    private async createRefreshInDb({ memberId }: { memberId: string }) {
        return this.prisma.refreshToken.create({
            data: { memberId, needUpdate: false },
        });
    }
}

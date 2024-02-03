import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { IAuthLogin } from 'src/interfaces/auth.interface';
import { IAccessToken, IRefreshToken, ITokenPayload } from 'src/interfaces/token.interface';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

type TokenType = 'access' | 'refresh';
type PositionType = 'board' | 'coordinator';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: DatabaseService,
    private readonly jwtService: JwtService,
  ) {}

  /* ----------------  LOGIN  ---------------- */
  public async login(dto: IAuthLogin, ip: string): Promise<{ access: string; refresh: string }> {
    const findMember = await this.getMemberFullInfo({ login: dto.email });
    if (!findMember) throw new BadRequestException('incorrect email or password');

    const isMatch = await bcrypt.compare(dto.password, findMember.password);
    if (!isMatch) throw new BadRequestException('incorrect email or password');

    // split in method
    findMember.boardToMember = findMember.boardToMember.filter((item) => !item.cadence.ended);
    findMember.coordinatorToMember = findMember.coordinatorToMember.filter((item) => !item.cadence.ended);

    const membershipPermissions = findMember.membership.membershipPermission.map((item) => item.claim);
    const boardPermissions = this.getPermissions('board', findMember);
    const coordinatorPermissions = this.getPermissions('coordinator', findMember);

    const newRefresh = await this.createRefreshInDb({ memberId: findMember.id, userIp: ip ? ip : null });

    const tokenPayload: ITokenPayload = {
      refreshTokenId: newRefresh.id,
      memberId: findMember.id,
      membershipName: findMember.membership.name,
      fullName: findMember.fullName,
      surname: findMember.surname,
      permission: {
        board: boardPermissions as string[],
        coordinator: coordinatorPermissions as string[],
        membership: membershipPermissions,
      },
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
      permission: {
        board: refresh.permission.board,
        coordinator: refresh.permission.coordinator,
        membership: refresh.permission.membership,
      },
    });

    return { access: newAccessToken };
  }

  /* ----------------  UPDATE  ---------------- */
  public async update(refresh: IRefreshToken, ip: string): Promise<{ access: string; refresh: string }> {
    const findMember = await this.getMemberFullInfo({ id: refresh.memberId });
    if (!findMember) throw new BadRequestException('incorrect email or password');

    // split in method
    findMember.boardToMember = findMember.boardToMember.filter((item) => !item.cadence.ended);
    findMember.coordinatorToMember = findMember.coordinatorToMember.filter((item) => !item.cadence.ended);

    const membershipPermissions = findMember.membership.membershipPermission.map((item) => item.claim);
    const boardPermissions = this.getPermissions('board', findMember);
    const coordinatorPermissions = this.getPermissions('coordinator', findMember);

    const newRefresh = await this.createRefreshInDb({ memberId: findMember.id, userIp: ip ? ip : null });
    await this.prisma.refreshToken.delete({ where: { id: refresh.refreshTokenId } });

    const tokenPayload: ITokenPayload = {
      refreshTokenId: newRefresh.id,
      memberId: findMember.id,
      membershipName: findMember.membership.name,
      fullName: findMember.fullName,
      surname: findMember.surname,
      permission: {
        board: boardPermissions as string[],
        coordinator: coordinatorPermissions as string[],
        membership: membershipPermissions,
      },
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
    const token = await this.jwtService.signAsync(
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
    return token;
  }

  private async getMemberFullInfo({ id, login }: { id?: string; login?: string }) {
    if (!id && !login) return;

    const include = {
      membership: { include: { membershipPermission: { select: { claim: true } } } },
      boardToMember: {
        include: {
          board: { include: { boardPermission: { select: { claim: true } } } },
          cadence: true,
        },
      },
      coordinatorToMember: {
        include: {
          coordinator: { include: { coordinatorPermission: { select: { claim: true } } } },
          cadence: true,
        },
      },
    };

    if (id) {
      return await this.prisma.member.findUnique({ where: { id }, include });
    }
    return await this.prisma.member.findUnique({ where: { login }, include });
  }

  private async createRefreshInDb({ memberId, userIp }: { memberId: string; userIp: string | null }) {
    return await this.prisma.refreshToken.create({
      data: { memberId, needUpdate: false, userIp },
    });
  }

  private getPermissions(positionType: PositionType, member: any) {
    const set = member[`${positionType}ToMember`].reduce((accumulator, item) => {
      item[positionType][`${positionType}Permission`].forEach((permission) => {
        accumulator.add(permission.claim);
      });
      return accumulator;
    }, new Set());
    return Array.from(set);
  }
}

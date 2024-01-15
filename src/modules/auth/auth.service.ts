import { BadRequestException, Injectable, NotFoundException, UseFilters } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { IAuthLogin, IAuthLogout, IAuthRefresh, IAuthRegistration } from 'src/interfaces/auth.interface';
import { IAccessTokenPayload, IRefreshTokenPayload } from 'src/interfaces/token.interface';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ErrorLoggingFilter } from 'src/common/filters';

type TokenType = 'access' | 'refresh';
type PositionType = 'board' | 'coordinator';

@UseFilters(ErrorLoggingFilter)
@Injectable()
export class AuthService {
  constructor(
    private readonly database: DatabaseService,
    private readonly jwtService: JwtService,
  ) {}

  private async generateToken(tokenType: TokenType, payload: IAccessTokenPayload | IRefreshTokenPayload) {
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

  private async getMemberFullInfo({ id, email }: { id?: string; email?: string }) {
    if (!id && !email) return;

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
      return await this.database.member.findUnique({ where: { id }, include });
    }
    return await this.database.member.findUnique({ where: { email }, include });
  }

  private async createRefreshInDb({ memberId, userIp }: { memberId: string; userIp: string | null }) {
    return await this.database.refreshToken.create({
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

  /* ----------------  LOGIN  ---------------- */
  public async login(dto: IAuthLogin, ip: string): Promise<{ access: string; refresh: string }> {
    const findMember = await this.getMemberFullInfo({ email: dto.email });
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

    const refreshPayload: IRefreshTokenPayload = {
      memberId: findMember.id,
      refreshTokenId: newRefresh.id,
    };

    const accessPayload: IAccessTokenPayload = {
      refreshTokenId: newRefresh.id,
      membershipName: findMember.membership.name,
      fullName: findMember.fullName,
      surname: findMember.surname,
      permission: {
        board: boardPermissions as string[],
        coordinator: coordinatorPermissions as string[],
        membership: membershipPermissions,
      },
    };

    const refresh = await this.generateToken('refresh', refreshPayload);
    const access = await this.generateToken('access', accessPayload);

    return { access, refresh };
  }

  /* ----------------  REGISTRATION  ---------------- */
  // public async registration(dto: IAuthRegistration): Promise<{ message: string }> {
  //   return { message: string };
  // }

  /* ----------------  REFRESH  ---------------- */
  public async refresh(): Promise<{ access: string; refresh: string }> {
    // add delete old refresh
    return { access: '', refresh: '' };
  }

  /* ----------------  LOGOUT  ---------------- */
  public async logout(): Promise<{ message: string }> {
    return { message: '' };
  }
}

import { BadRequestException, Injectable, NotFoundException, UseFilters } from '@nestjs/common';
import {
  IMember,
  IMemberCheckById,
  IMemberCheckEmail,
  IMemberCreate,
  IMemberCreateRes,
  IMemberDelete,
  IMemberGetId,
  IMemberGetIdRes,
  IMemberGetListRes,
  IMemberUpdate,
} from 'src/interfaces/member/member.type';
import { ErrorLoggingFilter } from 'src/common/filters';
import { DatabaseService } from '../database/database.service';

@UseFilters(ErrorLoggingFilter)
@Injectable()
export class MemberService {
  constructor(private readonly prisma: DatabaseService) {}

  /* ----------------  GET  ---------------- */

  // get list
  public async getList(): Promise<IMemberGetListRes[]> {
    const memberList = await this.prisma.member.findMany({
      include: { membership: true },
    });

    return memberList;
  }

  // get by id
  public async getById(data: IMemberGetId): Promise<IMemberGetIdRes> {
    const member = await this.prisma.member.findUnique({
      where: { id: data.id },
      include: { membership: true, memberEmail: true, memberPhone: true, memberSocialNetwork: true },
    });
    if (!member) throw new NotFoundException('member not found');

    return member;
  }

  /* ----------------  POST  ---------------- */
  public async create(data: IMemberCreate): Promise<IMemberCreateRes> {
    // add check membership

    const memberByEmail = await this.checkByEmail({ email: data.email });
    if (memberByEmail) throw new BadRequestException('member is exist');

    const memberNew = await this.prisma.member.create({
      data: {
        membershipId: data.membershipId,
        //
        email: data.email.toLocaleLowerCase(),
        password: data.password,
        bestEmail: data.bestEmail ? data.bestEmail.toLocaleLowerCase() : null,
        //
        fullName: data.fullName.toLocaleLowerCase(),
        middleName: data.middleName.toLocaleLowerCase(),
        surname: data.surname.toLocaleLowerCase(),
        birthday: data.birthday,
        //
        faculty: data.faculty.toLocaleLowerCase(),
        group: data.group.toLocaleLowerCase(),
        //
        clothingSize: data.clothingSize ? data.clothingSize.toLocaleUpperCase() : null,
        homeAddress: data.homeAddress ? data.homeAddress.toLocaleLowerCase() : null,
      },
      include: { membership: true },
    });

    return memberNew;
  }

  /* ----------------  PUT  ---------------- */
  public async update(data: IMemberUpdate): Promise<IMember> {
    const memberById = await this.checkById({ id: data.id });
    if (!memberById) throw new NotFoundException('member not found');

    const memberUpdate = await this.prisma.member.update({
      where: { id: data.id },
      data: {
        membershipId: data.membershipId,
        //
        email: data.email.toLocaleLowerCase(),
        password: data.password,
        bestEmail: data.bestEmail ? data.bestEmail.toLocaleLowerCase() : null,
        //
        fullName: data.fullName.toLocaleLowerCase(),
        middleName: data.middleName.toLocaleLowerCase(),
        surname: data.surname.toLocaleLowerCase(),
        birthday: data.birthday,
        //
        faculty: data.faculty.toLocaleLowerCase(),
        group: data.group.toLocaleLowerCase(),
        //
        clothingSize: data.clothingSize ? data.clothingSize.toLocaleUpperCase() : null,
        homeAddress: data.homeAddress ? data.homeAddress.toLocaleLowerCase() : null,
      },
      include: { membership: true },
    });

    return memberUpdate;
  }

  /* ----------------  DELETE  ---------------- */
  public async deleteById(data: IMemberDelete): Promise<IMember> {
    const memberById = await this.checkById({ id: data.id });
    if (!memberById) throw new NotFoundException('member not found');

    const memberDelete = await this.prisma.member.delete({ where: { id: data.id } });

    return memberDelete;
  }

  //
  //
  //

  // check by id
  private async checkById({ id }: IMemberCheckById): Promise<IMember> {
    const member = await this.prisma.member.findUnique({ where: { id } });
    return member;
  }

  // check by email
  private async checkByEmail({ email }: IMemberCheckEmail): Promise<IMember> {
    const member = await this.prisma.member.findUnique({ where: { email } });
    return member;
  }
}

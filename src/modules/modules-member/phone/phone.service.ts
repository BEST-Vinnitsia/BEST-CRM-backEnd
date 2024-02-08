import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { IPhoneCreate, IPhoneListByMemberId, IPhoneMainByMemberId, IPhoneUpdate } from '../../../interfaces/member/phone.type';
import { MemberService } from '../member/member.service';

@Injectable()
export class PhoneService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly memberService: MemberService,
    ) {}

    /* ----------------  GET  ---------------- */
    public async getListByMemberId({ memberId }: IPhoneListByMemberId) {
        return this.prisma.memberPhone.findMany({
            where: { memberId },
        });
    }

    public async getMainByMemberId({ memberId }: IPhoneMainByMemberId) {
        return this.prisma.memberPhone.findMany({
            where: { memberId, isMain: true },
        });
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: IPhoneCreate[]) {
        const uniqueMemberId = Array.from(new Set(dto.map((item) => item.memberId)));
        const errors: string[] = [];

        const createNewPhonesToMember = uniqueMemberId.map(async (memberId) => {
            const member = await this.memberService.getByIdNoHaveError({ id: memberId });
            if (!member) {
                errors.push(`memberId: (${memberId}) is not found`);
                return;
            }

            const sortDto = dto.filter((email) => email.memberId === memberId);

            const createPhones = sortDto.map((newPhone) => {
                return this.prisma.memberPhone.create({
                    data: {
                        memberId: newPhone.memberId,
                        isMain: newPhone.isMain,
                        phone: newPhone.phone,
                    },
                });
            });
            return Promise.all(createPhones);
        });
        await Promise.all(createNewPhonesToMember);

        if (errors.length !== 0) {
            throw new BadRequestException(errors);
        }
        return { message: 'phones add done' };
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IPhoneUpdate[]) {
        const errors: string[] = [];

        for (const updatePhone of dto) {
            const checkEmail = await this.prisma.memberPhone.findUnique({
                where: { id: updatePhone.id },
            });
            if (!checkEmail) {
                errors.push(`phone id: (${updatePhone.id}) is not found`);
                continue;
            }

            await this.prisma.memberPhone.update({
                where: { id: updatePhone.id },
                data: {
                    memberId: updatePhone.memberId,
                    isMain: updatePhone.isMain,
                    phone: updatePhone.phone,
                },
            });
        }

        if (errors.length !== 0) {
            throw new BadRequestException(errors);
        }
        return { message: 'phones update done' };
    }

    /* ----------------  DELETE  ---------------- */
    public async delete(dto: string[]) {
        return this.prisma.memberPhone.deleteMany({
            where: { id: { in: dto } },
        });
    }
}

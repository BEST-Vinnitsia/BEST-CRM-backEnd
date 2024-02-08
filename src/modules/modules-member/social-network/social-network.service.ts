import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { MemberService } from '../member/member.service';
import {
    ISocialNetworkCreate,
    ISocialNetworkListByMemberId,
    ISocialNetworkMainByMemberId,
    ISocialNetworkUpdate,
} from '../../../interfaces/member/socialNetwork.type';

@Injectable()
export class SocialNetworkService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly memberService: MemberService,
    ) {}

    /* ----------------  GET  ---------------- */
    public async getListByMemberId({ memberId }: ISocialNetworkListByMemberId) {
        return this.prisma.memberSocialNetwork.findMany({
            where: { memberId },
        });
    }

    public async getMainByMemberId({ memberId }: ISocialNetworkMainByMemberId) {
        return this.prisma.memberSocialNetwork.findMany({
            where: { memberId, isMain: true },
        });
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: ISocialNetworkCreate[]) {
        const uniqueMemberId = Array.from(new Set(dto.map((item) => item.memberId)));
        const errors: string[] = [];

        const createNewSocialNetworksToMember = uniqueMemberId.map(async (memberId) => {
            const member = await this.memberService.getByIdNoHaveError({ id: memberId });
            if (!member) {
                errors.push(`memberId: (${memberId}) is not found`);
                return;
            }

            const sortDto = dto.filter((item) => item.memberId === memberId);

            const createSocialNetworks = sortDto.map((newItem) => {
                return this.prisma.memberSocialNetwork.create({
                    data: {
                        memberId: newItem.memberId,
                        isMain: newItem.isMain,
                        url: newItem.url,
                        name: newItem.name,
                    },
                });
            });
            return Promise.all(createSocialNetworks);
        });
        await Promise.all(createNewSocialNetworksToMember);

        if (errors.length !== 0) {
            throw new BadRequestException(errors);
        }
        return { message: 'social networks add done' };
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: ISocialNetworkUpdate[]) {
        const errors: string[] = [];

        for (const updateSocialNetwork of dto) {
            const checkEmail = await this.prisma.memberSocialNetwork.findUnique({
                where: { id: updateSocialNetwork.id },
            });
            if (!checkEmail) {
                errors.push(`social network id: (${updateSocialNetwork.id}) is not found`);
                continue;
            }

            await this.prisma.memberSocialNetwork.update({
                where: { id: updateSocialNetwork.id },
                data: {
                    memberId: updateSocialNetwork.memberId,
                    isMain: updateSocialNetwork.isMain,
                    url: updateSocialNetwork.url,
                    name: updateSocialNetwork.name,
                },
            });
        }

        if (errors.length !== 0) {
            throw new BadRequestException(errors);
        }
        return { message: 'social networks update done' };
    }

    /* ----------------  DELETE  ---------------- */
    public async delete(dto: string[]) {
        return this.prisma.memberSocialNetwork.deleteMany({
            where: { id: { in: dto } },
        });
    }
}

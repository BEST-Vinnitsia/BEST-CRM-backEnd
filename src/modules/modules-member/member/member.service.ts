import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {
    IMember,
    IMemberCreate,
    IMemberCreateRes,
    IMemberCreateWithAllInfo,
    IMemberGetId,
    IMemberGetIdRes,
    IMemberGetListRes,
    IMemberUpdate,
    IMemberUpdateMembership,
    IMemberUpdateWithAllInfo,
} from 'src/interfaces/member/member.type';
import { PrismaService } from '../../prisma/prisma.service';
import { IMemberListAllInfo } from '../../../interfaces/member/member-big-data.interface';
import { BoardService } from '../../modules-board/board/board.service';
import { CadenceService } from '../../cadence/cadence.service';
import { CommitteeService } from '../../modules-committee/committee/committee.service';
import { CoordinatorService } from '../../modules-coordinator/coordinator/coordinator.service';
import { ResponsibleService } from '../../modules-event/responsible/responsible.service';
import { NewEventService } from '../../modules-event/new-event/new-event.service';

@Injectable()
export class MemberService {
    errorMessages = {
        NOT_FOUND: 'Member is not found',
        IS_EXIST: 'Member is exist',
    };

    constructor(
        private readonly prisma: PrismaService,
        private readonly boardService: BoardService,
        private readonly cadenceService: CadenceService,
        private readonly committeeService: CommitteeService,
        private readonly coordinatorService: CoordinatorService,
        private readonly responsibleService: ResponsibleService,
        private readonly newEventService: NewEventService,
    ) {}

    /* ----------------  GET  ---------------- */

    public async getListAllInfo(): Promise<IMemberListAllInfo[]> {
        return this.prisma.member.findMany({
            select: {
                id: true,
                name: true,
                surname: true,
                bestEmail: true,
                membership: true,
                email: true,
                phone: true,
                socialNetwork: true,
                group: true,
                faculty: true,
                birthday: true,
                boardToMember: {
                    select: {
                        id: true,
                        cadence: { select: { id: true, number: true, isEnd: true } },
                        board: { select: { id: true, name: true, isActive: true } },
                    },
                },
                coordinatorToMember: {
                    select: {
                        id: true,
                        cadence: { select: { id: true, number: true, isEnd: true } },
                        coordinator: { select: { id: true, name: true, isActive: true } },
                    },
                },
                committeeToMember: {
                    select: {
                        id: true,
                        cadence: { select: { id: true, number: true, isEnd: true } },
                        committee: { select: { id: true, name: true, isActive: true } },
                    },
                },
                memberToEvent: {
                    select: {
                        id: true,
                        newEvent: {
                            select: {
                                id: true,
                                event: { select: { id: true, name: true, isActive: true } },
                                cadence: { select: { id: true, number: true, isEnd: true } },
                            },
                        },
                        responsible: { select: { id: true, name: true, isActive: true, role: true } },
                    },
                },
            },
        });
    }

    public async getList(): Promise<IMemberGetListRes[]> {
        return this.prisma.member.findMany();
    }

    public async getById(dto: IMemberGetId): Promise<IMemberGetIdRes> {
        const member = await this.prisma.member.findUnique({
            where: { id: dto.id },
        });
        if (!member) throw new NotFoundException(this.errorMessages.NOT_FOUND);

        return member;
    }

    public async getByIdAllInfo(dto: IMemberGetId) {
        const member = await this.prisma.member.findUnique({
            where: { id: dto.id },
            select: {
                id: true,
                name: true,
                surname: true,
                bestEmail: true,
                membership: true,
                email: true,
                phone: true,
                socialNetwork: true,
                group: true,
                faculty: true,
                birthday: true,
                boardToMember: {
                    select: {
                        id: true,
                        cadence: { select: { id: true, number: true, isEnd: true } },
                        board: { select: { id: true, name: true, isActive: true } },
                    },
                },
                coordinatorToMember: {
                    select: {
                        id: true,
                        cadence: { select: { id: true, number: true, isEnd: true } },
                        coordinator: { select: { id: true, name: true, isActive: true } },
                    },
                },
                committeeToMember: {
                    select: {
                        id: true,
                        cadence: { select: { id: true, number: true, isEnd: true } },
                        committee: { select: { id: true, name: true, isActive: true } },
                    },
                },
                memberToEvent: {
                    select: {
                        id: true,
                        newEvent: {
                            select: {
                                id: true,
                                event: { select: { id: true, name: true, isActive: true } },
                                cadence: { select: { id: true, number: true, isEnd: true } },
                            },
                        },
                        responsible: { select: { id: true, name: true, isActive: true, role: true } },
                    },
                },
            },
        });
        if (!member) throw new NotFoundException(this.errorMessages.NOT_FOUND);

        return member;
    }

    public async getByIdNoHaveError(dto: IMemberGetId): Promise<IMemberGetIdRes> {
        return this.prisma.member.findUnique({
            where: { id: dto.id },
        });
    }

    public async getByLogin({ login }: { login: string }): Promise<IMemberGetIdRes> {
        const member = await this.prisma.member.findUnique({
            where: { login: login },
        });
        if (!member) throw new NotFoundException(this.errorMessages.NOT_FOUND);

        return member;
    }

    /* ----------------  POST  ---------------- */
    public async create(dto: IMemberCreate): Promise<IMemberCreateRes> {
        const member = await this.prisma.member.findUnique({
            where: { login: dto.login },
        });
        if (member) throw new BadRequestException(this.errorMessages.IS_EXIST);

        const hash = await bcrypt.hash(dto.password, 12);

        return this.prisma.member.create({
            data: {
                membership: dto.membership,

                login: dto.login.toLocaleLowerCase(),
                password: hash,

                bestEmail: dto.bestEmail ? dto.bestEmail.toLocaleLowerCase() : null,
                phone: dto.phone,
                email: dto.email,
                socialNetwork: dto.socialNetwork,

                name: dto.name,
                middleName: dto.middleName,
                surname: dto.surname,
                birthday: dto.birthday,

                faculty: dto.faculty,
                group: dto.group,

                clothingSize: dto.clothingSize ? dto.clothingSize.toLocaleUpperCase() : null,
                homeAddress: dto.homeAddress ? dto.homeAddress : null,
            },
        });
    }

    public async createWithAllInfo(dto: IMemberCreateWithAllInfo) {
        const member = await this.prisma.member.findUnique({
            where: { login: dto.login },
        });
        if (member) throw new BadRequestException(this.errorMessages.IS_EXIST);

        // CHECKS
        const checkBoardPromise = Promise.all(
            dto.boardToMember.map(async (item) => {
                await this.boardService.getById({ id: item.boardId });
                await this.cadenceService.getById({ id: item.cadenceId });
            }),
        );

        const checkCoordinatorPromise = Promise.all(
            dto.coordinatorToMember.map(async (item) => {
                await this.coordinatorService.getById({ id: item.coordinatorId });
                await this.cadenceService.getById({ id: item.cadenceId });
            }),
        );

        const checkCommitteePromise = Promise.all(
            dto.committeeToMember.map(async (item) => {
                await this.committeeService.getById({ id: item.committeeId });
                await this.cadenceService.getById({ id: item.cadenceId });
            }),
        );

        const checkEventPromise = Promise.all(
            dto.eventToMember.map(async (item) => {
                const checkResp = await this.responsibleService.getById({ id: item.responsibleId });
                const checkEvent = await this.newEventService.getById({ id: item.eventId });

                if (checkResp.eventId !== checkEvent.eventId) throw new BadRequestException('event or position id in incorrect');
            }),
        );

        await Promise.all([checkBoardPromise, checkCoordinatorPromise, checkCommitteePromise, checkEventPromise]);

        // CREATE member
        const newMember = await this.create(dto);
        if (!newMember) throw new InternalServerErrorException();

        // CREATE to member
        const createBoardToMemberPromise = Promise.all(
            dto.boardToMember.map(async (item) => {
                await this.prisma.boardToMember.create({
                    data: { memberId: newMember.id, cadenceId: item.cadenceId, boardId: item.boardId },
                });
            }),
        );

        const createCoordinatorToMemberPromise = Promise.all(
            dto.coordinatorToMember.map(async (item) => {
                await this.prisma.coordinatorToMember.create({
                    data: { memberId: newMember.id, cadenceId: item.cadenceId, coordinatorId: item.coordinatorId },
                });
            }),
        );

        const createCommitteeToMemberPromise = Promise.all(
            dto.committeeToMember.map(async (item) => {
                await this.prisma.committeeToMember.create({
                    data: { memberId: newMember.id, cadenceId: item.cadenceId, committeeId: item.committeeId },
                });
            }),
        );

        const createEventToMemberPromise = Promise.all(
            dto.eventToMember.map(async (item) => {
                await this.prisma.memberToEvent.create({
                    data: {
                        memberId: newMember.id,
                        responsibleId: item.responsibleId,
                        newEventId: item.eventId,
                        excluded: false,
                    },
                });
            }),
        );

        await Promise.all([createBoardToMemberPromise, createCoordinatorToMemberPromise, createCommitteeToMemberPromise, createEventToMemberPromise]);

        return { message: 'add member is done' };
    }

    /* ----------------  PUT  ---------------- */
    public async update(dto: IMemberUpdate): Promise<IMember> {
        const member = await this.prisma.member.findUnique({
            where: { id: dto.id },
        });
        if (!member) throw new NotFoundException(this.errorMessages.NOT_FOUND);

        return this.prisma.member.update({
            where: { id: dto.id },
            data: {
                membership: dto.membership,

                bestEmail: dto.bestEmail ? dto.bestEmail.toLocaleLowerCase() : null,
                phone: dto.phone,
                email: dto.email,
                socialNetwork: dto.socialNetwork,

                name: dto.name,
                surname: dto.surname,
                middleName: dto.middleName,
                birthday: dto.birthday,

                faculty: dto.faculty,
                group: dto.group,

                clothingSize: dto.clothingSize ? dto.clothingSize.toLocaleUpperCase() : null,
                homeAddress: dto.homeAddress ? dto.homeAddress : null,
            },
        });
    }

    public async updateAllInfo(dto: IMemberUpdateWithAllInfo) {
        // CHECK
        const getMemberPromise = this.prisma.member.findUnique({ where: { id: dto.id } });
        const getBoardToMemberListPromise = this.prisma.boardToMember.findMany({ where: { memberId: dto.id } });
        const getCoordinatorToMemberListPromise = this.prisma.coordinatorToMember.findMany({ where: { memberId: dto.id } });
        const getCommitteeToMemberListPromise = this.prisma.committeeToMember.findMany({ where: { memberId: dto.id } });
        const getMemberToEventListPromise = this.prisma.memberToEvent.findMany({ where: { memberId: dto.id } });

        const [
            member, //
            boardToMemberList,
            coordinatorToMemberList,
            committeeToMemberList,
            memberToEventList,
        ] = await Promise.all([
            getMemberPromise,
            getBoardToMemberListPromise,
            getCoordinatorToMemberListPromise,
            getCommitteeToMemberListPromise,
            getMemberToEventListPromise,
        ]);

        if (!member) throw new NotFoundException(this.errorMessages.NOT_FOUND);

        const boardToMemberFilter = boardToMemberList.filter(
            (item) => !dto.boardToMember.some((d) => item.cadenceId === d.cadenceId && item.boardId === d.boardId),
        );
        const coordinatorToMemberFilter = coordinatorToMemberList.filter(
            (item) => !dto.coordinatorToMember.some((d) => item.cadenceId === d.cadenceId && item.coordinatorId === d.coordinatorId),
        );
        const committeeToMemberFilter = committeeToMemberList.filter(
            (item) => !dto.committeeToMember.some((d) => item.cadenceId === d.cadenceId && item.committeeId === d.committeeId),
        );
        const memberToEventFilter = memberToEventList.filter(
            (item) => !dto.eventToMember.some((d) => item.newEventId === d.eventId && item.responsibleId === d.responsibleId),
        );

        // DELETE
        const boardToMemberDeletePromise = this.prisma.boardToMember.deleteMany({ where: { id: { in: boardToMemberFilter.map((i) => i.id) } } });
        const coordinatorToMemberDeletePromise = this.prisma.coordinatorToMember.deleteMany({
            where: { id: { in: coordinatorToMemberFilter.map((i) => i.id) } },
        });
        const committeeToMemberDeletePromise = this.prisma.committeeToMember.deleteMany({
            where: { id: { in: committeeToMemberFilter.map((i) => i.id) } },
        });
        const memberToEventDeletePromise = this.prisma.memberToEvent.deleteMany({ where: { id: { in: memberToEventFilter.map((i) => i.id) } } });

        await Promise.all([boardToMemberDeletePromise, coordinatorToMemberDeletePromise, committeeToMemberDeletePromise, memberToEventDeletePromise]);

        // ADD

        const boardToMemberFilterDto = dto.boardToMember.filter(
            (item) => !boardToMemberList.some((d) => item.cadenceId === d.cadenceId && item.boardId === d.boardId),
        );
        const coordinatorToMemberFilterDto = dto.coordinatorToMember.filter(
            (item) => !coordinatorToMemberList.some((d) => item.cadenceId === d.cadenceId && item.coordinatorId === d.coordinatorId),
        );
        const committeeToMemberFilterDto = dto.committeeToMember.filter(
            (item) => !committeeToMemberList.some((d) => item.cadenceId === d.cadenceId && item.committeeId === d.committeeId),
        );
        const memberToEventFilterDto = dto.eventToMember.filter(
            (item) => !memberToEventList.some((d) => item.eventId === d.newEventId && item.responsibleId === d.responsibleId),
        );

        const boardToMemberCreatePromise = Promise.all(
            boardToMemberFilterDto.map((i) =>
                this.prisma.boardToMember.create({
                    data: { boardId: i.boardId, cadenceId: i.cadenceId, excluded: false, memberId: dto.id },
                }),
            ),
        );
        const coordinatorToMemberCreatePromise = Promise.all(
            coordinatorToMemberFilterDto.map((i) =>
                this.prisma.coordinatorToMember.create({
                    data: { coordinatorId: i.coordinatorId, cadenceId: i.cadenceId, excluded: false, memberId: dto.id },
                }),
            ),
        );
        const committeeToMemberCreatePromise = Promise.all(
            committeeToMemberFilterDto.map((i) =>
                this.prisma.committeeToMember.create({
                    data: { committeeId: i.committeeId, cadenceId: i.cadenceId, excluded: false, memberId: dto.id },
                }),
            ),
        );
        const memberToEventCreatePromise = Promise.all(
            memberToEventFilterDto.map((i) =>
                this.prisma.memberToEvent.create({
                    data: { newEventId: i.eventId, responsibleId: i.responsibleId, excluded: false, memberId: dto.id },
                }),
            ),
        );

        const res = await Promise.all([
            boardToMemberCreatePromise,
            coordinatorToMemberCreatePromise,
            committeeToMemberCreatePromise,
            memberToEventCreatePromise,
        ]);
        console.log(res);

        return { message: 'Member update is done' };
    }

    public async updateMembership({ id, membership }: IMemberUpdateMembership): Promise<IMember> {
        const member = await this.prisma.member.findUnique({
            where: { id },
        });
        if (!member) throw new NotFoundException(this.errorMessages.NOT_FOUND);

        const updateMembership = await this.prisma.member.update({
            where: { id },
            data: { membership },
        });
        if (!updateMembership) throw new InternalServerErrorException();

        return updateMembership;
    }

    /* ----------------  DELETE  ---------------- */
    public async deleteArray(dto: string[]) {
        return this.prisma.member.deleteMany({
            where: { id: { in: dto } },
        });
    }
}

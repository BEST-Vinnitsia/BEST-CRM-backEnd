import { IBoardToMemberPrisma } from '../../../../interfaces/prisma';

export interface IGetListRes extends Omit<IBoardToMemberPrisma, 'createdAt' | 'updatedAt'> {}

export interface IGetByIdRes extends IBoardToMemberPrisma {}
export interface IGetByBoardIdRes extends IBoardToMemberPrisma {}
export interface IGetByCadenceIdRes extends IBoardToMemberPrisma {}
export interface IGetByMemberIdRes extends IBoardToMemberPrisma {}

export interface ICreateRes extends Pick<IBoardToMemberPrisma, 'id'> {}

export interface IUpdateRes extends Pick<IBoardToMemberPrisma, 'id'> {}

export interface IDeleteRes extends Pick<IBoardToMemberPrisma, 'id'> {}

export interface IDeleteArrayRes {
    count: number;
}

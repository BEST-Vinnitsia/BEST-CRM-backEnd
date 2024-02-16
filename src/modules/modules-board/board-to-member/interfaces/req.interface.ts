import { IBoardToMemberPrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq extends Pick<IBoardToMemberPrisma, 'id'> {}
export interface IGetByBoardIdReq extends Pick<IBoardToMemberPrisma, 'boardId'> {}
export interface IGetByCadenceIdReq extends Pick<IBoardToMemberPrisma, 'cadenceId'> {}
export interface IGetByMemberIdReq extends Pick<IBoardToMemberPrisma, 'memberId'> {}

export interface ICreateReq extends Omit<IBoardToMemberPrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<IBoardToMemberPrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq extends Pick<IBoardToMemberPrisma, 'id'> {}

export interface IDeleteArrayReq {
    id: number[];
}

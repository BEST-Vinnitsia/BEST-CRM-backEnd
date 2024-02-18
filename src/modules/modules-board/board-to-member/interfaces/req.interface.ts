import { IBoardToMemberPrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq {
    id: string;
}

export interface IGetByBoardIdReq {
    boardId: string;
}

export interface IGetByCadenceIdReq {
    cadenceId: string;
}

export interface IGetByMemberIdReq {
    memberId: string;
}

export interface ICreateReq extends Omit<IBoardToMemberPrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<IBoardToMemberPrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq {
    id: string;
}

export interface IDeleteArrayReq {
    id: number[];
}

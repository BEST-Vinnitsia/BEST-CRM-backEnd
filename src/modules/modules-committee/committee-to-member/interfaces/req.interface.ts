import { ICommitteeToMemberPrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq {
    id: string;
}

export interface IGetByCommitteeIdReq {
    committeeId: string;
}

export interface IGetByCadenceIdReq {
    cadenceId: string;
}

export interface IGetByMemberIdReq {
    memberId: string;
}

export interface ICreateReq extends Omit<ICommitteeToMemberPrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<ICommitteeToMemberPrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq {
    id: string;
}

export interface IDeleteArrayReq {
    id: number[];
}

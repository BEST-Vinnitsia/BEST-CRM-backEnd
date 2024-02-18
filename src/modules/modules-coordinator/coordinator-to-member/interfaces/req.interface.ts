import { ICoordinatorToMemberPrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq {
    id: string;
}

export interface IGetByCoordinatorIdReq {
    coordinatorId: string;
}

export interface IGetByCadenceIdReq {
    cadenceId: string;
}

export interface IGetByMemberIdReq {
    memberId: string;
}

export interface ICreateReq extends Omit<ICoordinatorToMemberPrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<ICoordinatorToMemberPrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq {
    id: string;
}

export interface IDeleteArrayReq {
    id: number[];
}

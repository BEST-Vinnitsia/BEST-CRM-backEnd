import { ICoordinatorToMemberPrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq extends Pick<ICoordinatorToMemberPrisma, 'id'> {}
export interface IGetByCoordinatorIdReq extends Pick<ICoordinatorToMemberPrisma, 'coordinatorId'> {}
export interface IGetByCadenceIdReq extends Pick<ICoordinatorToMemberPrisma, 'cadenceId'> {}
export interface IGetByMemberIdReq extends Pick<ICoordinatorToMemberPrisma, 'memberId'> {}

export interface ICreateReq extends Omit<ICoordinatorToMemberPrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<ICoordinatorToMemberPrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq extends Pick<ICoordinatorToMemberPrisma, 'id'> {}

export interface IDeleteArrayReq {
    id: number[];
}

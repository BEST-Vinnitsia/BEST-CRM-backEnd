import { ICoordinatorToMemberPrisma } from '../../../../interfaces/prisma';

export interface IGetListRes extends Omit<ICoordinatorToMemberPrisma, 'createdAt' | 'updatedAt'> {}

export interface IGetByIdRes extends ICoordinatorToMemberPrisma {}
export interface IGetByCoordinatorIdRes extends ICoordinatorToMemberPrisma {}
export interface IGetByCadenceIdRes extends ICoordinatorToMemberPrisma {}
export interface IGetByMemberIdRes extends ICoordinatorToMemberPrisma {}

export interface ICreateRes extends Pick<ICoordinatorToMemberPrisma, 'id'> {}

export interface IUpdateRes extends Pick<ICoordinatorToMemberPrisma, 'id'> {}

export interface IDeleteRes extends Pick<ICoordinatorToMemberPrisma, 'id'> {}

export interface IDeleteArrayRes {
    count: number;
}

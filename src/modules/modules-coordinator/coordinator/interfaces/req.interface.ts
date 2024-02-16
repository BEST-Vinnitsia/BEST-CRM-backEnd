import { ICoordinatorPrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq extends Pick<ICoordinatorPrisma, 'id'> {}

export interface ICreateReq extends Omit<ICoordinatorPrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<ICoordinatorPrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq extends Pick<ICoordinatorPrisma, 'id'> {}

export interface IDeleteArrayReq {
    id: number[];
}

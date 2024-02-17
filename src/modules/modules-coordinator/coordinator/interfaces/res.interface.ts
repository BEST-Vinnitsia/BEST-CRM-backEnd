import { ICoordinatorPrisma } from '../../../../interfaces/prisma';

export interface IGetListRes extends Omit<ICoordinatorPrisma, 'createdAt' | 'updatedAt'> {}

export interface IGetByIdRes extends ICoordinatorPrisma {}

export interface ICreateRes extends Pick<ICoordinatorPrisma, 'id'> {}

export interface IUpdateRes extends Pick<ICoordinatorPrisma, 'id'> {}

export interface IDeleteRes extends Pick<ICoordinatorPrisma, 'id'> {}

export interface IDeleteArrayRes {
    count: number;
}

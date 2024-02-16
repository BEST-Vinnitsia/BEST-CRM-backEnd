import { IResponsiblePrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq extends Pick<IResponsiblePrisma, 'id'> {}

export interface ICreateReq extends Omit<IResponsiblePrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<IResponsiblePrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq extends Pick<IResponsiblePrisma, 'id'> {}

export interface IDeleteArrayReq {
    id: number[];
}

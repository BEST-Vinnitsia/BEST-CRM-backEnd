import { IBoardPrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq extends Pick<IBoardPrisma, 'id'> {}

export interface ICreateReq extends Omit<IBoardPrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<IBoardPrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq extends Pick<IBoardPrisma, 'id'> {}

export interface IDeleteArrayReq {
    id: number[];
}

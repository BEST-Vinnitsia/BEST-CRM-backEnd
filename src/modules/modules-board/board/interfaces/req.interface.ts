import { IBoardPrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq {
    id: string;
}

export interface ICreateReq extends Omit<IBoardPrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<IBoardPrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq {
    id: string;
}

export interface IDeleteArrayReq {
    id: number[];
}

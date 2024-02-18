import { IMemberPrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq {
    id: string;
}

export interface ICreateReq extends Omit<IMemberPrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<IMemberPrisma, 'login' | 'password' | 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq {
    id: string;
}

export interface IDeleteArrayReq {
    id: number[];
}

import { IMemberPrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq extends Pick<IMemberPrisma, 'id'> {}

export interface ICreateReq extends Omit<IMemberPrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<IMemberPrisma, 'login' | 'password' | 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq extends Pick<IMemberPrisma, 'id'> {}

export interface IDeleteArrayReq {
    id: string[];
}

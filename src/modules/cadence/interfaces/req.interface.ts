import { ICadencePrisma } from '../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq extends Pick<ICadencePrisma, 'id'> {}

export interface ICreateReq extends Omit<ICadencePrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<ICadencePrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq extends Pick<ICadencePrisma, 'id'> {}

export interface IDeleteArrayReq {
    id: number[];
}

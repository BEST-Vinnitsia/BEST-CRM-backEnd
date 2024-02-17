import { ICommitteePrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq extends Pick<ICommitteePrisma, 'id'> {}

export interface ICreateReq extends Omit<ICommitteePrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<ICommitteePrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq extends Pick<ICommitteePrisma, 'id'> {}

export interface IDeleteArrayReq {
    id: number[];
}

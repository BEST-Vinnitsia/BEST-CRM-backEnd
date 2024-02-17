import { ICommitteePrisma } from '../../../../interfaces/prisma';

export interface IGetListRes extends Omit<ICommitteePrisma, 'createdAt' | 'updatedAt'> {}

export interface IGetByIdRes extends ICommitteePrisma {}

export interface ICreateRes extends Pick<ICommitteePrisma, 'id'> {}

export interface IUpdateRes extends Pick<ICommitteePrisma, 'id'> {}

export interface IDeleteRes extends Pick<ICommitteePrisma, 'id'> {}

export interface IDeleteArrayRes {
    count: number;
}

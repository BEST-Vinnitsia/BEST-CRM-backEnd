import { ICadencePrisma } from '../../../interfaces/prisma';

export interface IGetListRes extends Omit<ICadencePrisma, 'createdAt' | 'updatedAt'> {}

export interface IGetByIdRes extends ICadencePrisma {}

export interface ICreateRes extends Pick<ICadencePrisma, 'id'> {}

export interface IUpdateRes extends Pick<ICadencePrisma, 'id'> {}

export interface IDeleteRes extends Pick<ICadencePrisma, 'id'> {}

export interface IDeleteArrayRes {
    count: number;
}

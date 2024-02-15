import { IMemberPrisma } from '../../../../interfaces/prisma';

export interface IGetListRes extends Omit<IMemberPrisma, 'login' | 'password'> {}

export interface IGetByIdRes extends Omit<IMemberPrisma, 'login' | 'password'> {}

export interface ICreateRes extends Omit<IMemberPrisma, 'login' | 'password'> {}

export interface IUpdateRes extends Omit<IMemberPrisma, 'login' | 'password'> {}

export interface IDeleteRes {}

export interface IDeleteArrayRes {
    count: number;
}

import { IMemberPrisma } from '../../../../interfaces/prisma';

export interface IGetListRes extends Omit<IMemberPrisma, 'login' | 'password' | 'createdAt' | 'updatedAt' | 'homeAddress' | 'clothingSize'> {}

export interface IGetByIdRes extends Omit<IMemberPrisma, 'login' | 'password'> {}

export interface ICreateRes extends Pick<IMemberPrisma, 'id'> {}

export interface IUpdateRes extends Pick<IMemberPrisma, 'id'> {}

export interface IDeleteRes extends Pick<IMemberPrisma, 'id'> {}

export interface IDeleteArrayRes {
    count: number;
}

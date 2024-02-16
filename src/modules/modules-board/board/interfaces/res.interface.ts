import { IBoardPrisma } from '../../../../interfaces/prisma';

export interface IGetListRes extends Omit<IBoardPrisma, 'createdAt' | 'updatedAt'> {}

export interface IGetByIdRes extends IBoardPrisma {}

export interface ICreateRes extends Pick<IBoardPrisma, 'id'> {}

export interface IUpdateRes extends Pick<IBoardPrisma, 'id'> {}

export interface IDeleteRes extends Pick<IBoardPrisma, 'id'> {}

export interface IDeleteArrayRes {
    count: number;
}

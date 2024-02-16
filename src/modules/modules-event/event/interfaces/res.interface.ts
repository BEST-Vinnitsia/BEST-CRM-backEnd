import { IEventPrisma } from '../../../../interfaces/prisma';

export interface IGetListRes extends Omit<IEventPrisma, 'createdAt' | 'updatedAt'> {}

export interface IGetByIdRes extends IEventPrisma {}

export interface ICreateRes extends Pick<IEventPrisma, 'id'> {}

export interface IUpdateRes extends Pick<IEventPrisma, 'id'> {}

export interface IDeleteRes extends Pick<IEventPrisma, 'id'> {}

export interface IDeleteArrayRes {
    count: number;
}

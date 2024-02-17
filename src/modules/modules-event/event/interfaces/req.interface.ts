import { IEventPrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq extends Pick<IEventPrisma, 'id'> {}

export interface ICreateReq extends Omit<IEventPrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<IEventPrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq extends Pick<IEventPrisma, 'id'> {}

export interface IDeleteArrayReq {
    id: number[];
}

import { INewEventPrisma } from '../../../../interfaces/prisma';

export interface IGetListRes extends Omit<INewEventPrisma, 'createdAt' | 'updatedAt'> {}

export interface IGetByIdRes extends INewEventPrisma {}
export interface IGetByEventIdRes extends INewEventPrisma {}
export interface IGetByCadenceIdRes extends INewEventPrisma {}

export interface ICreateRes extends Pick<INewEventPrisma, 'id'> {}

export interface IUpdateRes extends Pick<INewEventPrisma, 'id'> {}

export interface IDeleteRes extends Pick<INewEventPrisma, 'id'> {}

export interface IDeleteArrayRes {
    count: number;
}

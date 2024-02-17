import { INewEventPrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq extends Pick<INewEventPrisma, 'id'> {}
export interface IGetByEventIdReq extends Pick<INewEventPrisma, 'eventId'> {}
export interface IGetByCadenceIdReq extends Pick<INewEventPrisma, 'cadenceId'> {}

export interface ICreateReq extends Omit<INewEventPrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<INewEventPrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq extends Pick<INewEventPrisma, 'id'> {}

export interface IDeleteArrayReq {
    id: number[];
}

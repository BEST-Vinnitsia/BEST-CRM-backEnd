import { INewEventPrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq {
    id: string;
}

export interface IGetByEventIdReq {
    eventId: string;
}

export interface IGetByCadenceIdReq {
    cadenceId: string;
}

export interface ICreateReq extends Omit<INewEventPrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<INewEventPrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq {
    id: string;
}

export interface IDeleteArrayReq {
    id: number[];
}

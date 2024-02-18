import { IResponsiblePrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq {
    id: string;
}

export interface IGetByEventIdReq {
    eventId: string;
}

export interface ICreateReq extends Omit<IResponsiblePrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<IResponsiblePrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq {
    id: string;
}

export interface IDeleteArrayReq {
    id: number[];
}

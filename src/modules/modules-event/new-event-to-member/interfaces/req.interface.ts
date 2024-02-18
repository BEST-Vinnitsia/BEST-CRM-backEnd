import { INewEventToMemberPrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq {
    id: string;
}

export interface IGetByNewEventIdReq {
    newEventId: string;
}

export interface IGetByResponsibleIdReq {
    responsibleId: string;
}

export interface IGetByMemberIdReq {
    memberId: string;
}

export interface ICreateReq extends Omit<INewEventToMemberPrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<INewEventToMemberPrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq {
    id: string;
}

export interface IDeleteArrayReq {
    id: number[];
}

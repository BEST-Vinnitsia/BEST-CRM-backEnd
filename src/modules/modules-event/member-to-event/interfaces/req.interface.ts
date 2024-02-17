import { INewEventToMemberPrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq extends Pick<INewEventToMemberPrisma, 'id'> {}
export interface IGetByNewEventIdReq extends Pick<INewEventToMemberPrisma, 'newEventId'> {}
export interface IGetByResponsibleIdReq extends Pick<INewEventToMemberPrisma, 'responsibleId'> {}
export interface IGetByMemberIdReq extends Pick<INewEventToMemberPrisma, 'memberId'> {}

export interface ICreateReq extends Omit<INewEventToMemberPrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<INewEventToMemberPrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq extends Pick<INewEventToMemberPrisma, 'id'> {}

export interface IDeleteArrayReq {
    id: number[];
}

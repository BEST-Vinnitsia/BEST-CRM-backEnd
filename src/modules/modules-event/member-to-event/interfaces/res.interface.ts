import { INewEventToMemberPrisma } from '../../../../interfaces/prisma';

export interface IGetListRes extends Omit<INewEventToMemberPrisma, 'createdAt' | 'updatedAt'> {}

export interface IGetByIdRes extends INewEventToMemberPrisma {}
export interface IGetByNewEventIdRes extends INewEventToMemberPrisma {}
export interface IGetByResponsibleIdRes extends INewEventToMemberPrisma {}
export interface IGetByMemberIdRes extends INewEventToMemberPrisma {}

export interface ICreateRes extends Pick<INewEventToMemberPrisma, 'id'> {}

export interface IUpdateRes extends Pick<INewEventToMemberPrisma, 'id'> {}

export interface IDeleteRes extends Pick<INewEventToMemberPrisma, 'id'> {}

export interface IDeleteArrayRes {
    count: number;
}

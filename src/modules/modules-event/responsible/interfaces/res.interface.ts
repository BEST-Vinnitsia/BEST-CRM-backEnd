import { IResponsiblePrisma } from '../../../../interfaces/prisma';

export interface IGetListRes extends Omit<IResponsiblePrisma, 'createdAt' | 'updatedAt'> {}

export interface IGetByIdRes extends IResponsiblePrisma {}
export interface IGetByEventIdRes extends IResponsiblePrisma {}

export interface ICreateRes extends Pick<IResponsiblePrisma, 'id'> {}

export interface IUpdateRes extends Pick<IResponsiblePrisma, 'id'> {}

export interface IDeleteRes extends Pick<IResponsiblePrisma, 'id'> {}

export interface IDeleteArrayRes {
    count: number;
}

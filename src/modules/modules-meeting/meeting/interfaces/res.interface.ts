import { IMeetingPrisma } from '../../../../interfaces/prisma';

export interface IGetListRes extends Omit<IMeetingPrisma, 'createdAt' | 'updatedAt'> {}

export interface IGetByIdRes extends IMeetingPrisma {}

export interface IGetByCadenceIdRes extends IMeetingPrisma {}

export interface ICreateRes extends Pick<IMeetingPrisma, 'id'> {}

export interface IUpdateRes extends Pick<IMeetingPrisma, 'id'> {}

export interface IDeleteRes extends Pick<IMeetingPrisma, 'id'> {}

export interface IDeleteArrayRes {
    count: number;
}

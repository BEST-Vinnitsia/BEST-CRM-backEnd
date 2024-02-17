import { IMeetingPrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq extends Pick<IMeetingPrisma, 'id'> {}
export interface IGetByCadenceIdReq extends Pick<IMeetingPrisma, 'cadenceId'> {}

export interface ICreateReq extends Omit<IMeetingPrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<IMeetingPrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq extends Pick<IMeetingPrisma, 'id'> {}

export interface IDeleteArrayReq {
    id: number[];
}

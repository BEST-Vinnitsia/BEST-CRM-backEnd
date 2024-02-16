import { IIncreasePrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq extends Pick<IIncreasePrisma, 'id'> {}
export interface IGetByMeetingIdReq extends Pick<IIncreasePrisma, 'meetingId'> {}
export interface IGetByMemberIdReq extends Pick<IIncreasePrisma, 'memberId'> {}

export interface ICreateReq extends Omit<IIncreasePrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<IIncreasePrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq extends Pick<IIncreasePrisma, 'id'> {}

export interface IDeleteArrayReq {
    id: number[];
}

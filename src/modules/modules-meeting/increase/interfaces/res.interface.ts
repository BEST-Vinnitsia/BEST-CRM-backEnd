import { IIncreasePrisma } from '../../../../interfaces/prisma';

export interface IGetListRes extends Omit<IIncreasePrisma, 'createdAt' | 'updatedAt'> {}

export interface IGetByIdRes extends IIncreasePrisma {}

export interface IGetByMeetingIdRes extends IIncreasePrisma {}

export interface IGetByMemberIdRes extends IIncreasePrisma {}

export interface ICreateRes extends Pick<IIncreasePrisma, 'id'> {}

export interface IUpdateRes extends Pick<IIncreasePrisma, 'id'> {}

export interface IDeleteRes extends Pick<IIncreasePrisma, 'id'> {}

export interface IDeleteArrayRes {
    count: number;
}

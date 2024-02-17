import { ICommitteeToMemberPrisma } from '../../../../interfaces/prisma';

export interface IGetListRes extends Omit<ICommitteeToMemberPrisma, 'createdAt' | 'updatedAt'> {}

export interface IGetByIdRes extends ICommitteeToMemberPrisma {}
export interface IGetByCommitteeIdRes extends ICommitteeToMemberPrisma {}
export interface IGetByCadenceIdRes extends ICommitteeToMemberPrisma {}
export interface IGetByMemberIdRes extends ICommitteeToMemberPrisma {}

export interface ICreateRes extends Pick<ICommitteeToMemberPrisma, 'id'> {}

export interface IUpdateRes extends Pick<ICommitteeToMemberPrisma, 'id'> {}

export interface IDeleteRes extends Pick<ICommitteeToMemberPrisma, 'id'> {}

export interface IDeleteArrayRes {
    count: number;
}

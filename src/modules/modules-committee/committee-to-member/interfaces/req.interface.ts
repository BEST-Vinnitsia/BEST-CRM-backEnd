import { ICommitteeToMemberPrisma } from '../../../../interfaces/prisma';

export interface IGetListReq {}

export interface IGetByIdReq extends Pick<ICommitteeToMemberPrisma, 'id'> {}
export interface IGetByCommitteeIdReq extends Pick<ICommitteeToMemberPrisma, 'committeeId'> {}
export interface IGetByCadenceIdReq extends Pick<ICommitteeToMemberPrisma, 'cadenceId'> {}
export interface IGetByMemberIdReq extends Pick<ICommitteeToMemberPrisma, 'memberId'> {}

export interface ICreateReq extends Omit<ICommitteeToMemberPrisma, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IUpdateReq extends Omit<ICommitteeToMemberPrisma, 'createdAt' | 'updatedAt'> {}

export interface IDeleteReq extends Pick<ICommitteeToMemberPrisma, 'id'> {}

export interface IDeleteArrayReq {
    id: number[];
}

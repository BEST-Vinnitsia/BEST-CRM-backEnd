export interface ICommitteeToMember {
    id: string;
    cadenceId: string;
    coordinatorId: string;
    memberId: string;
    excluded: boolean;
    excludedDate?: Date;

    createdAt: Date;
    updatedAt: Date;
}

/* ----------------  extends  ---------------- */

export interface ICommitteeToMemberGetById extends Pick<ICommitteeToMember, 'id'> {}

export interface ICommitteeToMemberCreate extends Omit<ICommitteeToMember, 'id' | 'createdAt' | 'updatedAt'> {}

export interface ICommitteeToMemberUpdate extends Omit<ICommitteeToMember, 'createdAt' | 'updatedAt'> {}

export interface ICommitteeToMemberDelete extends Pick<ICommitteeToMember, 'id'> {}

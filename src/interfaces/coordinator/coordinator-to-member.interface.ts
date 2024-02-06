export interface ICoordinatorToMember {
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

export interface ICoordinatorToMemberGetById extends Pick<ICoordinatorToMember, 'id'> {}

export interface ICoordinatorToMemberCreate extends Omit<ICoordinatorToMember, 'id' | 'createdAt' | 'updatedAt'> {}

export interface ICoordinatorToMemberUpdate extends Omit<ICoordinatorToMember, 'createdAt' | 'updatedAt'> {}

export interface ICoordinatorToMemberDelete extends Pick<ICoordinatorToMember, 'id'> {}

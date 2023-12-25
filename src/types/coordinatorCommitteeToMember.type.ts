export interface ICoordinatorCommitteeToMember {
  id: string;
  coordinator_id: string;
  member_id: string;
  create_date: Date;
}

// Get by id
export interface ICoordinatorCommitteeToMemberCreate extends Omit<ICoordinatorCommitteeToMember, 'id' | 'create_date'> {}
export interface ICoordinatorCommitteeToMemberCreateRes extends ICoordinatorCommitteeToMember {}
export interface ICoordinatorCommitteeToMemberDbCreate extends Omit<ICoordinatorCommitteeToMember, 'id' | 'create_date'> {}
export interface ICoordinatorCommitteeToMemberDbCreateRes extends ICoordinatorCommitteeToMember {}

// Get by list
export interface ICoordinatorCommitteeToMemberGetListRes extends ICoordinatorCommitteeToMember {}
export interface ICoordinatorCommitteeToMemberDbGetListRes extends ICoordinatorCommitteeToMember {}

// Get by id
export interface ICoordinatorCommitteeToMemberGetById extends Pick<ICoordinatorCommitteeToMember, 'id'> {}
export interface ICoordinatorCommitteeToMemberGetByIdRes extends ICoordinatorCommitteeToMember {}
export interface ICoordinatorCommitteeToMemberDbGetById extends Pick<ICoordinatorCommitteeToMember, 'id'> {}
export interface ICoordinatorCommitteeToMemberDbGetByIdRes extends ICoordinatorCommitteeToMember {}

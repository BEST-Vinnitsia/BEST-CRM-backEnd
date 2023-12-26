export interface ICoordinatorToMember {
  id: string;
  cadence_id: string;
  coordinator_id: string;
  member_id: string;
  create_date: Date;
}

// Create
export interface ICoordinatorToMemberCreate extends Omit<ICoordinatorToMember, 'id' | 'create_date'> {}
export interface ICoordinatorToMemberCreateRes extends ICoordinatorToMember {}
export interface ICoordinatorToMemberDbCreate extends Omit<ICoordinatorToMember, 'id' | 'create_date'> {}
export interface ICoordinatorToMemberDbCreateRes extends ICoordinatorToMember {}

// Get by list
export interface ICoordinatorToMemberGetListRes extends ICoordinatorToMember {}
export interface ICoordinatorToMemberDbGetListRes extends ICoordinatorToMember {}

// Get by id
export interface ICoordinatorToMemberGetById extends Pick<ICoordinatorToMember, 'id'> {}
export interface ICoordinatorToMemberGetByIdRes extends ICoordinatorToMember {}
export interface ICoordinatorToMemberDbGetById extends Pick<ICoordinatorToMember, 'id'> {}
export interface ICoordinatorToMemberDbGetByIdRes extends ICoordinatorToMember {}

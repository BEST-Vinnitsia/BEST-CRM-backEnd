export interface ICoordinatorToMember {
  id: string;
  cadence_id: string;
  coordinator_id: string;
  member_id: string;
  create_date: Date;
}

// Create
export interface ICoordinatorToMember_Create extends Omit<ICoordinatorToMember, 'id' | 'create_date'> {}
export interface ICoordinatorToMember_Create_Res extends ICoordinatorToMember {}
export interface ICoordinatorToMember_Db_Create extends Omit<ICoordinatorToMember, 'id' | 'create_date'> {}
export interface ICoordinatorToMember_Db_Create_Res extends ICoordinatorToMember {}

// Get by list
export interface ICoordinatorToMember_GetList_Res extends ICoordinatorToMember {}
export interface ICoordinatorToMember_Db_GetList_Res extends ICoordinatorToMember {}

// Get by id
export interface ICoordinatorToMember_GetById extends Pick<ICoordinatorToMember, 'id'> {}
export interface ICoordinatorToMember_GetById_Res extends ICoordinatorToMember {}
export interface ICoordinatorToMember_Db_GetById extends Pick<ICoordinatorToMember, 'id'> {}
export interface ICoordinatorToMember_Db_GetById_Res extends ICoordinatorToMember {}

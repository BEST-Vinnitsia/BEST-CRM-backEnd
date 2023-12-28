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
export interface ICoordinatorToMember_GetList extends Pick<ICoordinatorToMember, 'cadence_id' | 'coordinator_id'> {}
export interface ICoordinatorToMember_GetList_Res extends ICoordinatorToMember {}
export interface ICoordinatorToMember_Db_GetList extends Pick<ICoordinatorToMember, 'cadence_id' | 'coordinator_id'> {}
export interface ICoordinatorToMember_Db_GetList_Res extends ICoordinatorToMember {}

// Get by all list
export interface ICoordinatorToMember_GetAllList extends Pick<ICoordinatorToMember, 'cadence_id'> {}
export interface ICoordinatorToMember_GetAllList_Res extends ICoordinatorToMember {}
export interface ICoordinatorToMember_Db_GetAllList extends Pick<ICoordinatorToMember, 'cadence_id'> {}
export interface ICoordinatorToMember_Db_GetAllList_Res extends ICoordinatorToMember {}

// Get by id
export interface ICoordinatorToMember_GetById extends Pick<ICoordinatorToMember, 'id' | 'cadence_id'> {}
export interface ICoordinatorToMember_GetById_Res extends ICoordinatorToMember {}
export interface ICoordinatorToMember_Db_GetById extends Pick<ICoordinatorToMember, 'id' | 'cadence_id'> {}
export interface ICoordinatorToMember_Db_GetById_Res extends ICoordinatorToMember {}

// Get by cadence id
export interface ICoordinatorToMember_GetByCadenceId extends Pick<ICoordinatorToMember, 'cadence_id'> {}
export interface ICoordinatorToMember_GetByCadenceId_Res extends ICoordinatorToMember {}
export interface ICoordinatorToMember_Db_GetCadenceById extends Pick<ICoordinatorToMember, 'cadence_id'> {}
export interface ICoordinatorToMember_Db_GetCadenceById_Res extends ICoordinatorToMember {}

// Get by member id
export interface ICoordinatorToMember_Db_GetByMemberIdCoordinatorIdCadenceId
  extends Pick<ICoordinatorToMember, 'member_id' | 'cadence_id' | 'coordinator_id'> {}
export interface ICoordinatorToMember_Db_GetByMemberIdCoordinatorIdCadenceId_Res extends ICoordinatorToMember {}

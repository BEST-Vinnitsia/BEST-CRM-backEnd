export interface ICoordinator {
  id: string;
  name: string;
  is_active: boolean;
  committee_is_active: boolean;
  create_date: Date;
}

// Create
export interface ICoordinator_Create extends Omit<ICoordinator, 'id' | 'create_date'> {}
export interface ICoordinator_Create_Res extends ICoordinator {}
export interface ICoordinator_Db_Create extends Omit<ICoordinator, 'id' | 'create_date'> {}
export interface ICoordinator_Db_Create_Res extends ICoordinator {}

// Get by list
export interface ICoordinator_GetList_Res extends ICoordinator {}
export interface ICoordinator_Db_GetList_Res extends ICoordinator {}

// Get by id
export interface ICoordinator_GetById extends Pick<ICoordinator, 'id'> {}
export interface ICoordinator_GetById_Res extends ICoordinator {}
export interface ICoordinator_Db_GetById extends Pick<ICoordinator, 'id'> {}
export interface ICoordinator_Db_GetById_Res extends ICoordinator {}

// Get by name
export interface ICoordinator_Db_GetByName extends Pick<ICoordinator, 'name'> {}
export interface ICoordinator_Db_GetByName_Res extends ICoordinator {}

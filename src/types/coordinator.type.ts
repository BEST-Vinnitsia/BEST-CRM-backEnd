export interface ICoordinator {
  id: string;
  name: string;
  is_active: boolean;
  committee_is_active: boolean;
  create_date: Date;
}

// Create
export interface ICoordinatorCreate extends Omit<ICoordinator, 'id' | 'create_date'> {}
export interface ICoordinatorCreateRes extends ICoordinator {}
export interface ICoordinatorDbCreate extends Omit<ICoordinator, 'id' | 'create_date'> {}
export interface ICoordinatorDbCreateRes extends ICoordinator {}

// Get by list
export interface ICoordinatorGetListRes extends ICoordinator {}
export interface ICoordinatorDbGetListRes extends ICoordinator {}

// Get by id
export interface ICoordinatorGetById extends Pick<ICoordinator, 'id'> {}
export interface ICoordinatorGetByIdRes extends ICoordinator {}
export interface ICoordinatorDbGetById extends Pick<ICoordinator, 'id'> {}
export interface ICoordinatorDbGetByIdRes extends ICoordinator {}

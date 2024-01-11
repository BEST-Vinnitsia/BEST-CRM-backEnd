export interface ICoordinator {
  id: string;
  name: string;
  isActive: boolean;
  committeeIsActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */

// get list
export interface ICoordinator_get_list_RES extends ICoordinator {}

// get by id
export interface ICoordinator_get_id extends Pick<ICoordinator, 'id'> {}
export interface ICoordinator_get_id_RES extends ICoordinator {}

// check by name
export interface ICoordinator_check_name extends Pick<ICoordinator, 'name'> {}
export interface ICoordinator_check_name_RES extends ICoordinator {}

/* ----------------  POST  ---------------- */
export interface ICoordinator_create extends Omit<ICoordinator, 'id' | 'createdAt' | 'updatedAt'> {}
export interface ICoordinator_create_RES extends ICoordinator {}

/* ----------------  PUT  ---------------- */
export interface ICoordinator_update extends Omit<ICoordinator, 'name' | 'createdAt' | 'updatedAt'> {}
export interface ICoordinator_update_RES extends ICoordinator {}

/* ----------------  DELETE  ---------------- */
export interface ICoordinator_delete extends Pick<ICoordinator, 'id'> {}
export interface ICoordinator_delete_RES extends ICoordinator {}

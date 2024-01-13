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

// get by id
export interface ICoordinator_get_id extends Pick<ICoordinator, 'id'> {}

// check by name
export interface ICoordinator_check_name extends Pick<ICoordinator, 'name'> {}

/* ----------------  POST  ---------------- */
export interface ICoordinator_create extends Omit<ICoordinator, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface ICoordinator_update extends Omit<ICoordinator, 'name' | 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface ICoordinator_delete extends Pick<ICoordinator, 'id'> {}

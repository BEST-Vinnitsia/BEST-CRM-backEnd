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
export interface ICoordinatorGetById extends Pick<ICoordinator, 'id'> {}

// check by name
export interface ICoordinatorCheckName extends Pick<ICoordinator, 'name'> {}

/* ----------------  POST  ---------------- */
export interface ICoordinatorCreate extends Omit<ICoordinator, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface ICoordinatorUpdate extends Omit<ICoordinator, 'name' | 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface ICoordinatorDelete extends Pick<ICoordinator, 'id'> {}

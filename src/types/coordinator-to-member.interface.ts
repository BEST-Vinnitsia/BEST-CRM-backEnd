export interface ICoordinatorToMember {
  id: string;
  cadenceId: string;
  coordinatorId: string;
  memberId: string;
  isLeader: boolean;
  createdAt: Date;
  updatedAt: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */

// get by id
export interface ICoordinatorToMember_get_id extends Pick<ICoordinatorToMember, 'id'> {}

/* ----------------  POST  ---------------- */
export interface ICoordinatorToMember_create extends Omit<ICoordinatorToMember, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface ICoordinatorToMember_update extends Omit<ICoordinatorToMember, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface ICoordinatorToMember_delete extends Pick<ICoordinatorToMember, 'id'> {}

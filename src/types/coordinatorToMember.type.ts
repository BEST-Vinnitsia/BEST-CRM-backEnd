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

// get list
export interface ICoordinatorToMember_get_list_RES extends ICoordinatorToMember {}

// get by id
export interface ICoordinatorToMember_get_id extends Pick<ICoordinatorToMember, 'id'> {}
export interface ICoordinatorToMember_get_id_RES extends ICoordinatorToMember {}

/* ----------------  POST  ---------------- */
export interface ICoordinatorToMember_create extends Omit<ICoordinatorToMember, 'id' | 'createdAt' | 'updatedAt'> {}
export interface ICoordinatorToMember_create_RES extends ICoordinatorToMember {}

/* ----------------  PUT  ---------------- */
export interface ICoordinatorToMember_update extends Omit<ICoordinatorToMember, 'createdAt' | 'updatedAt'> {}
export interface ICoordinatorToMember_update_RES extends ICoordinatorToMember {}

/* ----------------  DELETE  ---------------- */
export interface ICoordinatorToMember_delete extends Pick<ICoordinatorToMember, 'id'> {}
export interface ICoordinatorToMember_delete_RES extends ICoordinatorToMember {}

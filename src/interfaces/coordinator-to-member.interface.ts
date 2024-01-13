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
export interface ICoordinatorToMemberGetById extends Pick<ICoordinatorToMember, 'id'> {}

/* ----------------  POST  ---------------- */
export interface ICoordinatorToMemberCreate extends Omit<ICoordinatorToMember, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface ICoordinatorToMemberUpdate extends Omit<ICoordinatorToMember, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface ICoordinatorToMemberDelete extends Pick<ICoordinatorToMember, 'id'> {}

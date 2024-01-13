export interface IBoardToMember {
  id: string;
  cadenceId: string;
  boardId: string;
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
export interface IBoardToMember_get_id extends Pick<IBoardToMember, 'id'> {}

/* ----------------  POST  ---------------- */
export interface IBoardToMember_create extends Omit<IBoardToMember, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface IBoardToMember_update extends Omit<IBoardToMember, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface IBoardToMember_delete extends Pick<IBoardToMember, 'id'> {}

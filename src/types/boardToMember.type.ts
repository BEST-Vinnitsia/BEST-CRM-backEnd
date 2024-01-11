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

// get list
export interface IBoardToMember_get_list_RES extends IBoardToMember {}

// get by id
export interface IBoardToMember_get_id extends Pick<IBoardToMember, 'id'> {}
export interface IBoardToMember_get_id_RES extends IBoardToMember {}

/* ----------------  POST  ---------------- */
export interface IBoardToMember_create extends Omit<IBoardToMember, 'id' | 'createdAt' | 'updatedAt'> {}
export interface IBoardToMember_create_RES extends IBoardToMember {}

/* ----------------  PUT  ---------------- */
export interface IBoardToMember_update extends Omit<IBoardToMember, 'createdAt' | 'updatedAt'> {}
export interface IBoardToMember_update_RES extends IBoardToMember {}

/* ----------------  DELETE  ---------------- */
export interface IBoardToMember_delete extends Pick<IBoardToMember, 'id'> {}
export interface IBoardToMember_delete_RES extends IBoardToMember {}

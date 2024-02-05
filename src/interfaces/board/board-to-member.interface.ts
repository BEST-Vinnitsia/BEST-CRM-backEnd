export interface IBoardToMember {
    id: string;
    cadenceId: string;
    boardId: string;
    memberId: string;

    createdAt: Date;
    updatedAt: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */

// get by id
export interface IBoardToMemberGetById extends Pick<IBoardToMember, 'id'> {}
export interface IBoardToMemberGetByMemberId extends Pick<IBoardToMember, 'memberId'> {}
export interface IBoardToMemberGetByCadenceId extends Pick<IBoardToMember, 'cadenceId'> {}
export interface IBoardToMemberGetByBoardId extends Pick<IBoardToMember, 'boardId'> {}

/* ----------------  POST  ---------------- */
export interface IBoardToMemberCreate extends Omit<IBoardToMember, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface IBoardToMemberUpdate extends Omit<IBoardToMember, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface IBoardToMemberDeleteArray {
    boardToMemberId: string[];
}

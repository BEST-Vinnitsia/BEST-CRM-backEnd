export interface ITranslation {
  id: string; // uuid V4
  meetingId: string;
  memberId: string;
  membershipId: string;
  createdAt: Date;
  updatedAt: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */

// get by id
export interface ITranslation_get_id extends Pick<ITranslation, 'id'> {}

/* ----------------  POST  ---------------- */
export interface ITranslation_create extends Omit<ITranslation, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface ITranslation_update extends Omit<ITranslation, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface ITranslation_delete extends Pick<ITranslation, 'id'> {}

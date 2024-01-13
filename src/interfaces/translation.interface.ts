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
export interface ITranslationGetById extends Pick<ITranslation, 'id'> {}

/* ----------------  POST  ---------------- */
export interface ITranslationCreate extends Omit<ITranslation, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface ITranslationUpdate extends Omit<ITranslation, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface ITranslationDelete extends Pick<ITranslation, 'id'> {}

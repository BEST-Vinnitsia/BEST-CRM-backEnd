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

// get list
export interface ITranslation_get_list_RES extends ITranslation {}

// get by id
export interface ITranslation_get_id extends Pick<ITranslation, 'id'> {}
export interface ITranslation_get_id_RES extends ITranslation {}

/* ----------------  POST  ---------------- */
export interface ITranslation_create extends Omit<ITranslation, 'id' | 'createdAt' | 'updatedAt'> {}
export interface ITranslation_create_RES extends ITranslation {}

/* ----------------  PUT  ---------------- */
export interface ITranslation_update extends Omit<ITranslation, 'createdAt' | 'updatedAt'> {}
export interface ITranslation_update_RES extends ITranslation {}

/* ----------------  DELETE  ---------------- */
export interface ITranslation_delete extends Pick<ITranslation, 'id'> {}
export interface ITranslation_delete_RES extends ITranslation {}

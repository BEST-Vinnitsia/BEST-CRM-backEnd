export interface IEmail {
  id: string;
  memberId: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */

// get list
export interface IEmail_get_list extends Pick<IEmail, 'memberId'> {}
export interface IEmail_get_list_RES extends IEmail {}

// get by id
export interface IEmail_get_id extends Pick<IEmail, 'id' | 'memberId'> {}
export interface IEmail_get_id_RES extends IEmail {}

/* ----------------  POST  ---------------- */
export interface IEmail_create extends Omit<IEmail, 'id' | 'createdAt' | 'updatedAt'> {}
export interface IEmail_create_RES extends IEmail {}

/* ----------------  PUT  ---------------- */
export interface IEmail_update extends Omit<IEmail, 'createdAt' | 'updatedAt'> {}
export interface IEmail_update_RES extends IEmail {}

/* ----------------  DELETE  ---------------- */
export interface IEmail_update extends Pick<IEmail, 'id'> {}
export interface IEmail_update_RES extends IEmail {}

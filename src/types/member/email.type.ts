export interface IEmail {
  id: string;
  member_id: string;
  email: string;
  create_date: Date;
  last_edit: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */

// get list
export interface IEmail_get_list extends Pick<IEmail, 'member_id'> {}
export interface IEmail_get_list_RES extends IEmail {}

// get by id
export interface IEmail_get_id extends Pick<IEmail, 'id' | 'member_id'> {}
export interface IEmail_get_id_RES extends IEmail {}

/* ----------------  POST  ---------------- */
export interface IEmail_create extends Omit<IEmail, 'id' | 'create_date' | 'last_edit'> {}
export interface IEmail_create_RES extends IEmail {}

/* ----------------  PUT  ---------------- */
export interface IEmail_update extends Omit<IEmail, 'create_date' | 'last_edit'> {}
export interface IEmail_update_RES extends IEmail {}

/* ----------------  DELETE  ---------------- */
export interface IEmail_update extends Pick<IEmail, 'id'> {}
export interface IEmail_update_RES extends IEmail {}

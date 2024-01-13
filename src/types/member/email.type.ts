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

// get by id
export interface IEmail_get_id extends Pick<IEmail, 'id' | 'memberId'> {}

/* ----------------  POST  ---------------- */
export interface IEmail_create extends Omit<IEmail, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface IEmail_update extends Omit<IEmail, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface IEmail_update extends Pick<IEmail, 'id'> {}

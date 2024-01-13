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

// get by id
export interface IEmailGetById extends Pick<IEmail, 'id' | 'memberId'> {}

/* ----------------  POST  ---------------- */
export interface IEmailCreate extends Omit<IEmail, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface IEmailUpdate extends Omit<IEmail, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface IEmailDelete extends Pick<IEmail, 'id'> {}

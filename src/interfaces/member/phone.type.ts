export interface IPhone {
  id: string;
  memberId: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */

// get list
export interface IPhone_get_list extends Pick<IPhone, 'memberId'> {}

// get by id
export interface IPhone_get_id extends Pick<IPhone, 'id'> {}

/* ----------------  POST  ---------------- */
export interface IPhone_create extends Omit<IPhone, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface IPhone_update extends Omit<IPhone, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface IPhone_update extends Pick<IPhone, 'id'> {}

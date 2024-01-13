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

// get by id
export interface IPhoneGetById extends Pick<IPhone, 'id'> {}

/* ----------------  POST  ---------------- */
export interface IPhone_create extends Omit<IPhone, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface IPhoneUpdate extends Omit<IPhone, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface IPhoneDelete extends Pick<IPhone, 'id'> {}

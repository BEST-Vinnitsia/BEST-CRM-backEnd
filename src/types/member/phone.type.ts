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
export interface IPhone_get_list_RES extends IPhone {}

// get by id
export interface IPhone_get_id extends Pick<IPhone, 'id'> {}
export interface IPhone_get_id_RES extends IPhone {}

/* ----------------  POST  ---------------- */
export interface IPhone_create extends Omit<IPhone, 'id' | 'createdAt' | 'updatedAt'> {}
export interface IPhone_create_RES extends IPhone {}

/* ----------------  PUT  ---------------- */
export interface IPhone_update extends Omit<IPhone, 'createdAt' | 'updatedAt'> {}
export interface IPhone_update_RES extends IPhone {}

/* ----------------  DELETE  ---------------- */
export interface IPhone_update extends Pick<IPhone, 'id'> {}
export interface IPhone_update_RES extends IPhone {}

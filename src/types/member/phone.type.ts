export interface IPhone {
  id: string;
  member_id: string;
  phone: string;
  create_date: Date;
  last_edit: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */

// get list
export interface IPhone_get_list extends Pick<IPhone, 'member_id'> {}
export interface IPhone_get_list_RES extends IPhone {}

// get by id
export interface IPhone_get_id extends Pick<IPhone, 'id'> {}
export interface IPhone_get_id_RES extends IPhone {}

/* ----------------  POST  ---------------- */
export interface IPhone_create extends Omit<IPhone, 'id' | 'create_date' | 'last_edit'> {}
export interface IPhone_create_RES extends IPhone {}

/* ----------------  PUT  ---------------- */
export interface IPhone_update extends Omit<IPhone, 'create_date' | 'last_edit'> {}
export interface IPhone_update_RES extends IPhone {}

/* ----------------  DELETE  ---------------- */
export interface IPhone_update extends Pick<IPhone, 'id'> {}
export interface IPhone_update_RES extends IPhone {}

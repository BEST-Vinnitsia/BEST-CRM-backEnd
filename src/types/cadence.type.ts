export interface ICadence {
  id: string;
  number: number;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */

// get list
export interface ICadence_get_list_RES extends ICadence {}

// get by id
export interface ICadence_get_id extends Pick<ICadence, 'id'> {}
export interface ICadence_get_id_RES extends ICadence {}

// check by number
export interface ICadence_check_number extends Pick<ICadence, 'number'> {}
export interface ICadence_check_number_RES extends ICadence {}

/* ----------------  POST  ---------------- */
export interface ICadence_create extends Omit<ICadence, 'id' | 'createdAt' | 'updatedAt'> {}
export interface ICadence_create_RES extends ICadence {}

/* ----------------  PUT  ---------------- */
export interface ICadence_update extends Omit<ICadence, 'createdAt' | 'updatedAt'> {}
export interface ICadence_update_RES extends ICadence {}

/* ----------------  DELETE  ---------------- */
export interface ICadence_delete extends Pick<ICadence, 'id'> {}
export interface ICadence_delete_RES extends ICadence {}

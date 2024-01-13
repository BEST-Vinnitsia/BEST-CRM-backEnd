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

// get by id
export interface ICadence_get_id extends Pick<ICadence, 'id'> {}

// check by number
export interface ICadence_check_number extends Pick<ICadence, 'number'> {}

/* ----------------  POST  ---------------- */
export interface ICadence_create extends Omit<ICadence, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface ICadence_update extends Omit<ICadence, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface ICadence_delete extends Pick<ICadence, 'id'> {}

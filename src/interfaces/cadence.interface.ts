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
export interface ICadenceGetById extends Pick<ICadence, 'id'> {}

// check by number
export interface ICadenceCheckNumber extends Pick<ICadence, 'number'> {}

/* ----------------  POST  ---------------- */
export interface ICadenceCreate extends Omit<ICadence, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface ICadenceUpdate extends Omit<ICadence, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface ICadenceDelete extends Pick<ICadence, 'id'> {}

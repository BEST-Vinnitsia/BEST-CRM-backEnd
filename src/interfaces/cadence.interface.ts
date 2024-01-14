export interface ICadence {
  id: string;
  number: number;
  startDate: Date;
  endDate: Date;
  ended: boolean;
  createdAt: Date;
  updatedAt: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */

// get by id
export interface ICadenceGetById extends Pick<ICadence, 'id'> {}

/* ----------------  POST  ---------------- */
export interface ICadenceCreate extends Omit<ICadence, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface ICadenceUpdate extends Omit<ICadence, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface ICadenceDelete extends Pick<ICadence, 'id'> {}

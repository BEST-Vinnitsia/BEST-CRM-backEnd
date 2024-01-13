export interface IMembership {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */

// get by id
export interface IMembership_get_id extends Pick<IMembership, 'id'> {}

// check by name
export interface IMembership_check_name extends Pick<IMembership, 'name'> {}

/* ----------------  POST  ---------------- */
export interface IMembership_create extends Omit<IMembership, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface IMembership_update extends Omit<IMembership, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface IMembership_delete extends Pick<IMembership, 'id'> {}
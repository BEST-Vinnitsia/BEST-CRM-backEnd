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
export interface IMembershipGetById extends Pick<IMembership, 'id'> {}

// check by name
export interface IMembershipCheckName extends Pick<IMembership, 'name'> {}

/* ----------------  POST  ---------------- */
export interface IMembershipCreate extends Omit<IMembership, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface IMembershipUpdate extends Omit<IMembership, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface IMembershipDelete extends Pick<IMembership, 'id'> {}
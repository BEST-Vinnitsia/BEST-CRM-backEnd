export interface ISocialNetwork {
  id: string;
  memberId: string;
  name: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */

// get list
export interface ISocialNetwork_get_list extends Pick<ISocialNetwork, 'memberId'> {}

// get by id
export interface ISocialNetwork_get_id extends Pick<ISocialNetwork, 'id'> {}

/* ----------------  POST  ---------------- */
export interface ISocialNetwork_create extends Omit<ISocialNetwork, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface ISocialNetwork_update extends Omit<ISocialNetwork, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface ISocialNetwork_update extends Pick<ISocialNetwork, 'id'> {}

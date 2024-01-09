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
export interface ISocialNetwork_get_list_RES extends ISocialNetwork {}

// get by id
export interface ISocialNetwork_get_id extends Pick<ISocialNetwork, 'id'> {}
export interface ISocialNetwork_get_id_RES extends ISocialNetwork {}

/* ----------------  POST  ---------------- */
export interface ISocialNetwork_create extends Omit<ISocialNetwork, 'id' | 'createdAt' | 'updatedAt'> {}
export interface ISocialNetwork_create_RES extends ISocialNetwork {}

/* ----------------  PUT  ---------------- */
export interface ISocialNetwork_update extends Omit<ISocialNetwork, 'createdAt' | 'updatedAt'> {}
export interface ISocialNetwork_update_RES extends ISocialNetwork {}

/* ----------------  DELETE  ---------------- */
export interface ISocialNetwork_update extends Pick<ISocialNetwork, 'id'> {}
export interface ISocialNetwork_update_RES extends ISocialNetwork {}

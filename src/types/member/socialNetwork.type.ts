export interface ISocialNetwork {
  id: string;
  member_id: string;
  name: string;
  url: string;
  create_date: Date;
  last_edit: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */

// get list
export interface ISocialNetwork_get_list extends Pick<ISocialNetwork, 'member_id'> {}
export interface ISocialNetwork_get_list_RES extends ISocialNetwork {}

// get by id
export interface ISocialNetwork_get_id extends Pick<ISocialNetwork, 'id'> {}
export interface ISocialNetwork_get_id_RES extends ISocialNetwork {}

/* ----------------  POST  ---------------- */
export interface ISocialNetwork_create extends Omit<ISocialNetwork, 'id' | 'create_date' | 'last_edit'> {}
export interface ISocialNetwork_create_RES extends ISocialNetwork {}

/* ----------------  PUT  ---------------- */
export interface ISocialNetwork_update extends Omit<ISocialNetwork, 'create_date' | 'last_edit'> {}
export interface ISocialNetwork_update_RES extends ISocialNetwork {}

/* ----------------  DELETE  ---------------- */
export interface ISocialNetwork_update extends Pick<ISocialNetwork, 'id'> {}
export interface ISocialNetwork_update_RES extends ISocialNetwork {}

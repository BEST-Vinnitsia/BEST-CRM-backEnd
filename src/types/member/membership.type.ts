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

// get list
export interface IMembership_get_list_RES extends IMembership {}

// get by id
export interface IMembership_get_id extends Pick<IMembership, 'id'> {}
export interface IMembership_get_id_RES extends IMembership {}

// check by name
export interface IMembership_check_name extends Pick<IMembership, 'name'> {}
export interface IMembership_check_name_RES extends IMembership {}

/* ----------------  POST  ---------------- */
export interface IMembership_create extends Omit<IMembership, 'id' | 'createdAt' | 'updatedAt'> {}
export interface IMembership_create_RES extends IMembership {}

/* ----------------  PUT  ---------------- */
export interface IMembership_update extends Omit<IMembership, 'createdAt' | 'updatedAt'> {}
export interface IMembership_update_RES extends IMembership {}

/* ----------------  DELETE  ---------------- */
export interface IMembership_delete extends Pick<IMembership, 'id'> {}
export interface IMembership_delete_RES {
  id: string[];
}

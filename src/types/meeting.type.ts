export interface IMeeting {
  id: string;
  cadenceId: string;
  name: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */

// get list
export interface IMeeting_get_list_RES extends IMeeting {}

// get by id
export interface IMeeting_get_id extends Pick<IMeeting, 'id'> {}
export interface IMeeting_get_id_RES extends IMeeting {}

/* ----------------  POST  ---------------- */
export interface IMeeting_create extends Omit<IMeeting, 'id' | 'createdAt' | 'updatedAt'> {}
export interface IMeeting_create_RES extends IMeeting {}

/* ----------------  PUT  ---------------- */
export interface IMeeting_update extends Omit<IMeeting, 'createdAt' | 'updatedAt'> {}
export interface IMeeting_update_RES extends IMeeting {}

/* ----------------  DELETE  ---------------- */
export interface IMeeting_delete extends Pick<IMeeting, 'id'> {}
export interface IMeeting_delete_RES extends IMeeting {}

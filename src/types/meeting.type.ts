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

// get by id
export interface IMeeting_get_id extends Pick<IMeeting, 'id'> {}

/* ----------------  POST  ---------------- */
export interface IMeeting_create extends Omit<IMeeting, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface IMeeting_update extends Omit<IMeeting, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface IMeeting_delete extends Pick<IMeeting, 'id'> {}

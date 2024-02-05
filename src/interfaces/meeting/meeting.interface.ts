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
export interface IMeetingGetById extends Pick<IMeeting, 'id'> {}

/* ----------------  POST  ---------------- */
export interface IMeetingCreate extends Omit<IMeeting, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface IMeetingUpdate extends Omit<IMeeting, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface IMeetingDelete extends Pick<IMeeting, 'id'> {}

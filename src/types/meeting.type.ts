export interface IMeeting {
  id: string;
  cadence_id: string;
  name: string;
  date: Date;
  create_date: Date;
}

// Create
export interface IMeeting_Create extends Omit<IMeeting, 'id' | 'create_date'> {}
export interface IMeeting_Create_Res extends IMeeting {}
export interface IMeeting_Db_Create extends Omit<IMeeting, 'id' | 'create_date'> {}
export interface IMeeting_Db_Create_Res extends IMeeting {}

// Get by list
export interface IMeeting_GetList_Res extends IMeeting {}
export interface IMeeting_Db_GetList_Res extends IMeeting {}

// Get by id
export interface IMeeting_GetById extends Pick<IMeeting, 'id'> {}
export interface IMeeting_GetById_Res extends IMeeting {}
export interface IMeeting_Db_GetById extends Pick<IMeeting, 'id'> {}
export interface IMeeting_Db_GetById_Res extends IMeeting {}

export interface IMeeting {
  id: string;
  cadence_id: string;
  name: string;
  date: Date;
  create_date: Date;
}

// Create
export interface IMeetingCreate extends Omit<IMeeting, 'id' | 'create_date'> {}
export interface IMeetingCreateRes extends IMeeting {}
export interface IMeetingDbCreate extends Omit<IMeeting, 'id' | 'create_date'> {}
export interface IMeetingDbCreateRes extends IMeeting {}

// Get by list
export interface IMeetingGetListRes extends IMeeting {}
export interface IMeetingDbGetListRes extends IMeeting {}

// Get by id
export interface IMeetingGetById extends Pick<IMeeting, 'id'> {}
export interface IMeetingGetByIdRes extends IMeeting {}
export interface IMeetingDbGetById extends Pick<IMeeting, 'id'> {}
export interface IMeetingDbGetByIdRes extends IMeeting {}

export interface IMeeting {
  id: string;
  cadenceId: string;
  name: string;
  date: Date;

  createdAt: Date;
  updatedAt: Date;
}

/* ----------------  extends  ---------------- */

export interface IMeetingGetById extends Pick<IMeeting, 'id'> {}

export interface IMeetingCreate extends Omit<IMeeting, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IMeetingUpdate extends Omit<IMeeting, 'createdAt' | 'updatedAt'> {}

export interface IMeetingDelete extends Pick<IMeeting, 'id'> {}

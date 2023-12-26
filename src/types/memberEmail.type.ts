export interface IMemberEmail {
  id: string;
  member_id: string;
  email: string;
  create_date: Date;
}

// Create
export interface IMemberEmailCreate extends Omit<IMemberEmail, 'id' | 'create_date'> {}
export interface IMemberEmailCreateRes extends IMemberEmail {}
export interface IMemberEmailDbCreate extends Omit<IMemberEmail, 'id' | 'create_date'> {}
export interface IMemberEmailDbCreateRes extends IMemberEmail {}

// Get list by member id
export interface IMemberEmailGetListByMemberId extends Pick<IMemberEmail, 'member_id'> {}
export interface IMemberEmailGetListByMemberIdRes extends IMemberEmail {}
export interface IMemberEmailDbGetListByMemberId extends Pick<IMemberEmail, 'member_id'> {}
export interface IMemberEmailDbGetListByMemberIdRes extends IMemberEmail {}

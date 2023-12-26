export interface IMemberBestEmail {
  id: string;
  member_id: string;
  email: string;
  create_date: Date;
}

// Create
export interface IMemberBestEmailCreate extends Omit<IMemberBestEmail, 'id' | 'create_date'> {}
export interface IMemberBestEmailCreateRes extends IMemberBestEmail {}
export interface IMemberBestEmailDbCreate extends Omit<IMemberBestEmail, 'id' | 'create_date'> {}
export interface IMemberBestEmailDbCreateRes extends IMemberBestEmail {}

// Get list by member id
export interface IMemberBestEmailGetListByMemberId extends Pick<IMemberBestEmail, 'member_id'> {}
export interface IMemberBestEmailGetListByMemberIdRes extends IMemberBestEmail {}
export interface IMemberBestEmailDbGetListByMemberId extends Pick<IMemberBestEmail, 'member_id'> {}
export interface IMemberBestEmailDbGetListByMemberIdRes extends IMemberBestEmail {}

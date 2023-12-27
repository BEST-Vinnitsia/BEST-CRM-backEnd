export interface IBestEmail {
  id: string;
  member_id: string;
  email: string;
  create_date: Date;
}

// Create
export interface IBestEmail_Create extends Omit<IBestEmail, 'id' | 'create_date'> {}
export interface IBestEmail_Create_Res extends IBestEmail {}
export interface IBestEmail_Db_Create extends Omit<IBestEmail, 'id' | 'create_date'> {}
export interface IBestEmail_Db_Create_Res extends IBestEmail {}

// Get list by member id
export interface IBestEmail_GetListByMemberId extends Pick<IBestEmail, 'member_id'> {}
export interface IBestEmail_GetListByMemberId_Res extends IBestEmail {}
export interface IBestEmail_Db_GetListByMemberId extends Pick<IBestEmail, 'member_id'> {}
export interface IBestEmail_Db_GetListByMemberId_Res extends IBestEmail {}

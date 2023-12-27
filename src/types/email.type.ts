export interface IEmail {
  id: string;
  member_id: string;
  email: string;
  create_date: Date;
}

// Create
export interface IEmail_Create extends Omit<IEmail, 'id' | 'create_date'> {}
export interface IEmail_Create_Res extends IEmail {}
export interface IEmail_Db_Create extends Omit<IEmail, 'id' | 'create_date'> {}
export interface IEmail_Db_Create_Res extends IEmail {}

// Get list by member id
export interface IEmail_GetListByMemberId extends Pick<IEmail, 'member_id'> {}
export interface IEmail_GetListByMemberId_Res extends IEmail {}
export interface IEmail_Db_GetListByMemberId extends Pick<IEmail, 'member_id'> {}
export interface IEmail_Db_GetListByMemberId_Res extends IEmail {}

// Get by member id and email
export interface IEmail_Db_GetByMemberIdAndEmail extends Pick<IEmail, 'member_id' | 'email'> {}
export interface IEmail_Db_GetByMemberIdAndEmail_Res extends IEmail {}

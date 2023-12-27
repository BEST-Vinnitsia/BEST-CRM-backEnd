import { IBestEmail } from './bestEmail.type';
import { IEmail } from './email.type';
import { IPhone } from './phone.type';
import { IMembership } from './membership.type';

export interface IMember {
  id: string; // uuid V4
  membership_id: string; // uuid V4
  email: string; // demo@gmail.com
  password: string;
  surname: string;
  full_name: string;
  middle_name: string;
  birthday: Date;
  group: string; // УБ-21б
  faculty: string; // ФМІБ
  clothing_size: string; // L
  create_date: Date;
}

// Create
export interface IMember_Create extends Omit<IMember, 'id' | 'create_date'> {}
export interface IMember_Create_Res extends Omit<IMember, 'password'> {
  membership: IMembership;
}
export interface IMember_Db_Create extends Omit<IMember, 'id' | 'create_date'> {}
export interface IMember_Db_Create_Res extends Omit<IMember, 'password'> {
  membership: IMembership;
}

// Get list
export interface IMember_GetList_Res extends Omit<IMember, 'password'> {
  membership: IMembership;
}
export interface IMember_Db_GetList_Res extends Omit<IMember, 'password'> {
  membership: IMembership;
}

// Get by id
export interface IMember_GetById extends Pick<IMember, 'id'> {}
export interface IMember_GetById_Res extends Omit<IMember, 'password'> {
  membership: IMembership;
  member_best_email: IBestEmail[];
  member_email: IEmail[];
  member_phone: IPhone[];
}
export interface IMember_Db_GetById extends Pick<IMember, 'id'> {}
export interface IMember_Db_GetById_Res extends Omit<IMember, 'password'> {
  membership: IMembership;
  member_best_email: IBestEmail[];
  member_email: IEmail[];
  member_phone: IPhone[];
}

// Get by email
export interface IMember_GetByEmail extends Pick<IMember, 'email'> {}
export interface IMember_GetByEmail_Res extends Omit<IMember, 'password'> {}
export interface IMember_Db_GetByEmail extends Pick<IMember, 'email'> {}
export interface IMember_Db_GetByEmail_Res extends Omit<IMember, 'password'> {}
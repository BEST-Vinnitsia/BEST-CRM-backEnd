import { IMemberBestEmail } from './memberBestEmail.type';
import { IMemberEmail } from './memberEmail.type';
import { IMemberPhone } from './memberPhone.type';
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

// Create member
export interface IMemberCreate extends Omit<IMember, 'id' | 'create_date'> {}
export interface IMemberCreateRes extends Omit<IMember, 'password' | 'membership_id'> {
  membership: IMembership;
}
export interface IMemberDbCreate extends Omit<IMember, 'id' | 'create_date'> {}
export interface IMemberDbCreateRes extends Omit<IMember, 'password' | 'membership_id'> {
  membership: IMembership;
}

// Get list
export interface IMemberGetListRes extends Omit<IMember, 'password' | 'membership_id'> {
  membership: IMembership;
}
export interface IMemberDbGetListRes extends Omit<IMember, 'password' | 'membership_id'> {
  membership: IMembership;
}

// Get by id
export interface IMemberGetById extends Pick<IMember, 'id'> {}
export interface IMemberGetByIdRes extends Omit<IMember, 'password' | 'membership_id'> {
  membership: IMembership;
  member_best_email: IMemberBestEmail[];
  member_email: IMemberEmail[];
  member_phone: IMemberPhone[];
}
export interface IMemberDbGetById extends Pick<IMember, 'id'> {}
export interface IMemberDbGetByIdRes extends Omit<IMember, 'password' | 'membership_id'> {
  membership: IMembership;
  member_best_email: IMemberBestEmail[];
  member_email: IMemberEmail[];
  member_phone: IMemberPhone[];
}

// Get by email
export interface IMemberGetByEmail extends Pick<IMember, 'email'> {}
export interface IMemberGetByEmailRes extends Omit<IMember, 'password'> {}
export interface IMemberDbGetByEmail extends Pick<IMember, 'email'> {}
export interface IMemberDbGetByEmailRes extends Omit<IMember, 'password'> {}

// Find by iid
export interface IMemberFindById extends Omit<IMember, 'password'> {}

// export interface IMember {
//   id: string; // uuid V4
//   email: string; // demo@gmail.com
//   password: string;

//   surname: string;
//   full_name: string;
//   middle_name: string;
//   birthday: Date /*
//   const currentDate = new Date();
//   const isoDateTimeString = currentDate.toISOString();

//   const unixTimeZero = Date.parse('2023-12-23T10:38:29.000Z');
//  */;

//   group: string; // УБ-21б
//   faculty: string; // ФМІБ

//   // updated in the future
//   // recruitment_id: string; // uuid V4

//   membership_id: string; // uuid V4

//   clothing_size: string; // L

//   // updated in the future
//   // home_address: string; // м. Вінниця, вул. Келицька 100
//   // public_profile: boolean; // true

//   create_date: Date;
// }

import { IEmail } from './email.type';
import { IPhone } from './phone.type';
import { IMembership } from './membership.type';
import { ISocialNetwork } from './socialNetwork.type';

export interface IMember {
  id: string;
  membershipId: string;
  // recruitment_id: string
  email: string;
  password: string;
  bestEmail: string | null;
  //
  surname: string;
  fullName: string;
  middleName: string;
  birthday: Date;
  //
  group: string;
  faculty: string;
  //
  clothingSize: string | null;
  homeAddress: string | null;
  //
  createdAt: Date;
  updatedAt: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */

// get list
export interface IMember_get_list_RES extends IMember {
  membership: IMembership;
}

// get by id
export interface IMember_get_id extends Pick<IMember, 'id'> {}
export interface IMember_get_id_RES extends IMember {
  membership: IMembership;
  memberEmail: IEmail[];
  memberPhone: IPhone[];
  memberSocialNetwork: ISocialNetwork[];
}

// check by id
export interface IMember_check_id extends Pick<IMember, 'id'> {}

// check by email
export interface IMember_check_email extends Pick<IMember, 'email'> {}

/* ----------------  POST  ---------------- */
export interface IMember_create extends Omit<IMember, 'id' | 'createdAt' | 'updatedAt'> {}
export interface IMember_create_RES extends IMember {
  membership: IMembership;
}

/* ----------------  PUT  ---------------- */
export interface IMember_update extends Omit<IMember, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface IMember_delete_id extends Pick<IMember, 'id'> {}
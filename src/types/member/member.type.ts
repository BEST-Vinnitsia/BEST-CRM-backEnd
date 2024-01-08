import { IEmail } from './email.type';
import { IPhone } from './phone.type';
import { IMembership } from './membership.type';
import { ISocialNetwork } from './socialNetwork.type';

export interface IMember {
  id: string;
  membership_id: string;
  // recruitment_id: string
  email: string;
  password: string;
  best_email: string | null;
  //
  surname: string;
  full_name: string;
  middle_name: string;
  birthday: Date;
  //
  group: string;
  faculty: string;
  //
  clothing_size: string | null;
  home_address: string | null;
  //
  create_date: Date;
  last_edit: Date;
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
  member_email: IEmail[];
  member_phone: IPhone[];
  member_social_network: ISocialNetwork[];
}

// check by id
export interface IMember_check_id extends Pick<IMember, 'id'> {}
export interface IMember_check_id_RES extends IMember {}

// check by email
export interface IMember_check_email extends Pick<IMember, 'email'> {}
export interface IMember_check_email_RES extends IMember {}

/* ----------------  POST  ---------------- */
export interface IMember_create extends Omit<IMember, 'id' | 'create_date' | 'last_edit'> {}
export interface IMember_create_RES extends IMember {
  membership: IMembership;
}

/* ----------------  PUT  ---------------- */
export interface IMember_update extends Omit<IMember, 'create_date' | 'last_edit'> {}
export interface IMember_update_RES extends IMember {}

/* ----------------  DELETE  ---------------- */
export interface IMember_delete_id extends Pick<IMember, 'id'> {}
export interface IMember_delete_id_RES {
  id: string[];
}

// delete array by id
export interface IMember_delete_array {
  id: string[];
}
export interface IMember_delete_array_RES {
  id: string[];
}

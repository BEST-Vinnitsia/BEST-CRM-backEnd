import { IEmail } from './email.type';
import { IPhone } from './phone.type';
import { ISocialNetwork } from './socialNetwork.type';

export interface IMember {
    id: string;
    membership: string;
    //
    login: string;
    password: string;
    //
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
export interface IMemberGetListRes extends IMember {}

// get by id
export interface IMemberGetId extends Pick<IMember, 'id'> {}

export interface IMemberGetIdRes extends IMember {
    email: IEmail[];
    phone: IPhone[];
    socialNetwork: ISocialNetwork[];
}

// check by id
export interface IMemberCheckById extends Pick<IMember, 'id'> {}

// check by email
export interface IMemberCheckEmail extends Pick<IMember, 'login'> {}

/* ----------------  POST  ---------------- */
export interface IMemberCreate extends Omit<IMember, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IMemberCreateRes extends IMember {}

/* ----------------  PUT  ---------------- */
export interface IMemberUpdate extends Omit<IMember, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface IMemberDelete extends Pick<IMember, 'id'> {}

export interface IMember {
    id: string;
    membership: string;

    login: string;
    password: string;

    bestEmail: string | null;

    surname: string;
    fullName: string;
    middleName: string;
    birthday: Date;

    group: string;
    faculty: string;

    clothingSize: string | null;
    homeAddress: string | null;

    createdAt: Date;
    updatedAt: Date;
}

/* ----------------  extends  ---------------- */

export interface IMemberGetListRes extends IMember {}

export interface IMemberGetId extends Pick<IMember, 'id'> {}

export interface IMemberGetIdRes extends IMember {}

export interface IMemberCreate extends Omit<IMember, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IMemberCreateRes extends IMember {}

export interface IMemberUpdate extends Omit<IMember, 'createdAt' | 'updatedAt'> {}

export interface IMemberDeleteArray {
    membersId: string[];
}

export interface IMember {
    id: string;
    membership: string /* Observer, Baby, Full, Alumni, Excluded */;

    login: string;
    password: string;

    bestEmail: string | null;
    email: string;
    phone: string;
    socialNetwork: string;

    name: string;
    surname: string;
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

export interface IMemberCreateWithAllInfo extends Omit<IMember, 'id' | 'createdAt' | 'updatedAt'> {
    boardToMember: {
        boardId: string;
        cadenceId: string;
    }[];
    coordinatorToMember: {
        coordinatorId: string;
        cadenceId: string;
    }[];
    committeeToMember: {
        committeeId: string;
        cadenceId: string;
    }[];
    eventToMember: {
        eventId: string;
        responsibleId: string;
    }[];
}

export interface IMemberUpdateWithAllInfo extends Omit<IMember, 'login' | 'password' | 'createdAt' | 'updatedAt'> {
    boardToMember: {
        boardId: string;
        cadenceId: string;
    }[];
    coordinatorToMember: {
        coordinatorId: string;
        cadenceId: string;
    }[];
    committeeToMember: {
        committeeId: string;
        cadenceId: string;
    }[];
    eventToMember: {
        eventId: string;
        responsibleId: string;
    }[];
}

export interface IMemberCreateRes extends IMember {}

export interface IMemberUpdate extends Omit<IMember, 'login' | 'password' | 'createdAt' | 'updatedAt'> {}

export interface IMemberUpdateMembership extends Pick<IMember, 'id' | 'membership'> {}

export interface IMemberDeleteArray {
    membersId: string[];
}

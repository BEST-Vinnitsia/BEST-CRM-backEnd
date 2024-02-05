export interface IEmail {
    id: string;
    memberId: string;
    email: string;
    isMain: boolean;

    createdAt: Date;
    updatedAt: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */
export interface IEmailListByMemberId extends Pick<IEmail, 'memberId'> {}

export interface IEmailMainByMemberId extends Pick<IEmail, 'memberId'> {}

/* ----------------  POST  ---------------- */
export interface IEmailCreate extends Omit<IEmail, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface IEmailUpdate extends Omit<IEmail, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface IEmailDelete {
    emailsId: string[];
}

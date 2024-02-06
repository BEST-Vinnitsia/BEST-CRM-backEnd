export interface IEmail {
    id: string;
    memberId: string;
    email: string;
    isMain: boolean;

    createdAt: Date;
    updatedAt: Date;
}

/* ----------------  extends  ---------------- */

export interface IEmailListByMemberId extends Pick<IEmail, 'memberId'> {}

export interface IEmailMainByMemberId extends Pick<IEmail, 'memberId'> {}

export interface IEmailCreate extends Omit<IEmail, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IEmailUpdate extends Omit<IEmail, 'createdAt' | 'updatedAt'> {}

export interface IEmailDelete {
    emailsId: string[];
}

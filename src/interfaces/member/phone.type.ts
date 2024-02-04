export interface IPhone {
    id: string;
    memberId: string;
    phone: string;
    isMain: boolean;
    createdAt: Date;
    updatedAt: Date;
}

//
// extends
//

/* ----------------  GET  ---------------- */
export interface IPhoneListByMemberId extends Pick<IPhone, 'memberId'> {}

export interface IPhoneMainByMemberId extends Pick<IPhone, 'memberId'> {}

/* ----------------  POST  ---------------- */
export interface IPhoneCreate extends Omit<IPhone, 'id' | 'createdAt' | 'updatedAt'> {}

/* ----------------  PUT  ---------------- */
export interface IPhoneUpdate extends Omit<IPhone, 'createdAt' | 'updatedAt'> {}

/* ----------------  DELETE  ---------------- */
export interface IPhoneDelete extends Pick<IPhone, 'id'> {}

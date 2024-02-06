export interface IPhone {
    id: string;
    memberId: string;
    phone: string;
    isMain: boolean;

    createdAt: Date;
    updatedAt: Date;
}

/* ----------------  extends  ---------------- */

export interface IPhoneListByMemberId extends Pick<IPhone, 'memberId'> {}

export interface IPhoneMainByMemberId extends Pick<IPhone, 'memberId'> {}

export interface IPhoneCreate extends Omit<IPhone, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IPhoneUpdate extends Omit<IPhone, 'createdAt' | 'updatedAt'> {}

export interface IPhoneDelete {
    phonesId: string[];
}

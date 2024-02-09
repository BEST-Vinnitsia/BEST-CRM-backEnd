export interface IIncrease {
    id: string;
    meetingId: string;
    memberId: string;
    membership: string /* Observer, Baby, Full, Alumni, Excluded */;

    createdAt: Date;
    updatedAt: Date;
}

/* ----------------  extends  ---------------- */

export interface IIncreaseGetById extends Pick<IIncrease, 'id'> {}

export interface IIncreaseCreate extends Omit<IIncrease, 'id' | 'createdAt' | 'updatedAt'> {}

export interface IIncreaseUpdate extends Omit<IIncrease, 'createdAt' | 'updatedAt'> {}

export interface IIncreaseDelete extends Pick<IIncrease, 'id'> {}

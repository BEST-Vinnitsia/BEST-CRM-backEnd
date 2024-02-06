export interface ITranslation {
  id: string; // uuid V4
  meetingId: string;
  memberId: string;
  membershipId: string;

  createdAt: Date;
  updatedAt: Date;
}

/* ----------------  extends  ---------------- */

export interface ITranslationGetById extends Pick<ITranslation, 'id'> {}

export interface ITranslationCreate extends Omit<ITranslation, 'id' | 'createdAt' | 'updatedAt'> {}

export interface ITranslationUpdate extends Omit<ITranslation, 'createdAt' | 'updatedAt'> {}

export interface ITranslationDelete extends Pick<ITranslation, 'id'> {}

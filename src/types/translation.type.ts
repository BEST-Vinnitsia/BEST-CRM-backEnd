export interface ITranslation {
  id: string; // uuid V4
  meeting_id: string;
  member_id: string;
  membership_id: string;
  create_date: Date;
}

// create
export interface ITranslationCreate extends Omit<ITranslation, 'id' | 'create_date'> {}
export interface ITranslationCreateRes extends ITranslation {}
export interface ITranslationDbCreate extends Omit<ITranslation, 'id' | 'create_date'> {}
export interface ITranslationDbCreateRes extends ITranslation {}

// Get list
export interface ITranslationGetListRes extends ITranslation {}
export interface ITranslationDbGetListRes extends ITranslation {}

// Get by id
export interface ITranslationGetById extends Pick<ITranslation, 'id'> {}
export interface ITranslationGetByIdRes extends ITranslation {}
export interface ITranslationDbGetById extends Pick<ITranslation, 'id'> {}
export interface ITranslationDbGetByIdRes extends ITranslation {}

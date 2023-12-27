export interface ITranslation {
  id: string; // uuid V4
  meeting_id: string;
  member_id: string;
  membership_id: string;
  create_date: Date;
}

// Create
export interface ITranslation_Create extends Omit<ITranslation, 'id' | 'create_date'> {}
export interface ITranslation_Create_Res extends ITranslation {}
export interface ITranslation_Db_Create extends Omit<ITranslation, 'id' | 'create_date'> {}
export interface ITranslation_Db_Create_Res extends ITranslation {}

// Get list
export interface ITranslation_GetList_Res extends ITranslation {}
export interface ITranslation_Db_GetList_Res extends ITranslation {}

// Get by id
export interface ITranslation_GetById extends Pick<ITranslation, 'id'> {}
export interface ITranslation_GetById_Res extends ITranslation {}
export interface ITranslation_Db_GetById extends Pick<ITranslation, 'id'> {}
export interface ITranslation_Db_GetById_Res extends ITranslation {}

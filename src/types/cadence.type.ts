export interface ICadence {
  id: string;
  number: number;
  start_date: Date;
  end_date: Date;
  create_date: Date;
}

// Create
export interface ICadence_Create extends Omit<ICadence, 'id' | 'create_date'> {}
export interface ICadence_Create_Res extends ICadence {}
export interface ICadence_Db_Create extends Omit<ICadence, 'id' | 'create_date'> {}
export interface ICadence_Db_Create_Res extends ICadence {}

// Get by list
export interface ICadence_GetList_Res extends ICadence {}
export interface ICadence_Db_GetList_Res extends ICadence {}

// Get by id
export interface ICadence_GetById extends Pick<ICadence, 'id'> {}
export interface ICadence_GetById_Res extends ICadence {}
export interface ICadence_Db_GetById extends Pick<ICadence, 'id'> {}
export interface ICadence_Db_GetById_Res extends ICadence {}

// Get by number
export interface ICadence_Db_GetByNumber extends Pick<ICadence, 'number'> {}
export interface ICadence_Db_GetByNumber_Res extends ICadence {}

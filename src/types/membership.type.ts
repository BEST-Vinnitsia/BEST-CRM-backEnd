export interface IMembership {
  id: string; // uuid V4
  name: string;
  create_date: Date;
}

// Create
export interface IMembership_Create extends Omit<IMembership, 'id' | 'create_date'> {}
export interface IMembership_Create_Res extends IMembership {}
export interface IMembership_Db_Create extends Omit<IMembership, 'id' | 'create_date'> {}
export interface IMembership_Db_Create_Res extends IMembership {}

// Get list
export interface IMembership_GetList_Res extends IMembership {}
export interface IMembership_Db_GetList_Res extends IMembership {}

// Get by id
export interface IMembership_GetById extends Pick<IMembership, 'id'> {}
export interface IMembership_GetById_Res extends IMembership {}
export interface IMembership_Db_GetById extends Pick<IMembership, 'id'> {}
export interface IMembership_Db_GetById_Res extends IMembership {}

// Get by name
export interface IMembership_Db_GetByName extends Pick<IMembership, 'name'> {}
export interface IMembership_Db_GetByName_Res extends IMembership {}

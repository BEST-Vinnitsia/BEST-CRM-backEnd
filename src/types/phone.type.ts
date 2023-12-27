export interface IPhone {
  id: string;
  member_id: string;
  phone: string;
  create_date: Date;
}

// Create
export interface IPhone_Create extends Omit<IPhone, 'id' | 'create_date'> {}
export interface IPhone_Create_Res extends IPhone {}
export interface IPhone_Db_Create extends Omit<IPhone, 'id' | 'create_date'> {}
export interface IPhone_Db_Create_Res extends IPhone {}

// Get list by member id
export interface IPhone_GetListByMemberId extends Pick<IPhone, 'member_id'> {}
export interface IPhone_GetListByMemberId_Res extends IPhone {}
export interface IPhone_Db_GetListByMemberId extends Pick<IPhone, 'member_id'> {}
export interface IPhone_Db_GetListByMemberId_Res extends IPhone {}

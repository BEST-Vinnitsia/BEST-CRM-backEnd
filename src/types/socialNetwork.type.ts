export interface ISocialNetwork {
  id: string;
  member_id: string;
  name: string;
  url: string;
  create_date: Date;
}

// Create
export interface ISocialNetwork_Create extends Omit<ISocialNetwork, 'id' | 'create_date'> {}
export interface ISocialNetwork_Create_Res extends ISocialNetwork {}
export interface ISocialNetwork_Db_Create extends Omit<ISocialNetwork, 'id' | 'create_date'> {}
export interface ISocialNetwork_Db_Create_Res extends ISocialNetwork {}

// Get list by member id
export interface ISocialNetwork_GetListByMemberId extends Pick<ISocialNetwork, 'member_id'> {}
export interface ISocialNetwork_GetListByMemberId_Res extends ISocialNetwork {}
export interface ISocialNetwork_Db_GetListByMemberId extends Pick<ISocialNetwork, 'member_id'> {}
export interface ISocialNetwork_Db_GetListByMemberId_Res extends ISocialNetwork {}

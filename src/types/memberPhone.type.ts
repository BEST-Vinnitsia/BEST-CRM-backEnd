export interface IMemberPhone {
  id: string;
  member_id: string;
  phone: string;
  create_date: Date;
}

// create
export interface IMemberPhoneCreate extends Omit<IMemberPhone, 'id' | 'create_date'> {}
export interface IMemberPhoneCreateRes extends IMemberPhone {}
export interface IMemberPhoneDbCreate extends Omit<IMemberPhone, 'id' | 'create_date'> {}
export interface IMemberPhoneDbCreateRes extends IMemberPhone {}

// get list by member id
export interface IMemberPhoneGetListByMemberId extends Pick<IMemberPhone, 'member_id'> {}
export interface IMemberPhoneGetListByMemberIdRes extends IMemberPhone {}
export interface IMemberPhoneDbGetListByMemberId extends Pick<IMemberPhone, 'member_id'> {}
export interface IMemberPhoneDbGetListByMemberIdRes extends IMemberPhone {}

export interface ILgaBoardToMember {
  id: string;
  board_id: string;
  member_id: string;
  create_date: Date;
}

// Get by id
export interface ILgaBoardToMemberCreate extends Omit<ILgaBoardToMember, 'id' | 'create_date'> {}
export interface ILgaBoardToMemberCreateRes extends ILgaBoardToMember {}
export interface ILgaBoardToMemberDbCreate extends Omit<ILgaBoardToMember, 'id' | 'create_date'> {}
export interface ILgaBoardToMemberDbCreateRes extends ILgaBoardToMember {}

// Get by list
export interface ILgaBoardToMemberGetListRes extends ILgaBoardToMember {}
export interface ILgaBoardToMemberDbGetListRes extends ILgaBoardToMember {}

// Get by id
export interface ILgaBoardToMemberGetById extends Pick<ILgaBoardToMember, 'id'> {}
export interface ILgaBoardToMemberGetByIdRes extends ILgaBoardToMember {}
export interface ILgaBoardToMemberDbGetById extends Pick<ILgaBoardToMember, 'id'> {}
export interface ILgaBoardToMemberDbGetByIdRes extends ILgaBoardToMember {}

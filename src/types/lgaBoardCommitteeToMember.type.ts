export interface ILgaBoardCommitteeToMember {
  id: string;
  board_id: string;
  member_id: string;
  create_date: Date;
}

// Get by id
export interface ILgaBoardCommitteeToMemberCreate extends Omit<ILgaBoardCommitteeToMember, 'id' | 'create_date'> {}
export interface ILgaBoardCommitteeToMemberCreateRes extends ILgaBoardCommitteeToMember {}
export interface ILgaBoardCommitteeToMemberDbCreate extends Omit<ILgaBoardCommitteeToMember, 'id' | 'create_date'> {}
export interface ILgaBoardCommitteeToMemberDbCreateRes extends ILgaBoardCommitteeToMember {}

// Get by list
export interface ILgaBoardCommitteeToMemberGetListRes extends ILgaBoardCommitteeToMember {}
export interface ILgaBoardCommitteeToMemberDbGetListRes extends ILgaBoardCommitteeToMember {}

// Get by id
export interface ILgaBoardCommitteeToMemberGetById extends Pick<ILgaBoardCommitteeToMember, 'id'> {}
export interface ILgaBoardCommitteeToMemberGetByIdRes extends ILgaBoardCommitteeToMember {}
export interface ILgaBoardCommitteeToMemberDbGetById extends Pick<ILgaBoardCommitteeToMember, 'id'> {}
export interface ILgaBoardCommitteeToMemberDbGetByIdRes extends ILgaBoardCommitteeToMember {}

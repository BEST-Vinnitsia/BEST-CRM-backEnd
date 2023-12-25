export interface IBoardCommitteeToMember {
  id: string;
  board_id: string;
  member_id: string;
  create_date: Date;
}

// Get by id
export interface IBoardCommitteeToMemberCreate extends Omit<IBoardCommitteeToMember, 'id' | 'create_date'> {}
export interface IBoardCommitteeToMemberCreateRes extends IBoardCommitteeToMember {}
export interface IBoardCommitteeToMemberDbCreate extends Omit<IBoardCommitteeToMember, 'id' | 'create_date'> {}
export interface IBoardCommitteeToMemberDbCreateRes extends IBoardCommitteeToMember {}

// Get by list
export interface IBoardCommitteeToMemberGetListRes extends IBoardCommitteeToMember {}
export interface IBoardCommitteeToMemberDbGetListRes extends IBoardCommitteeToMember {}

// Get by id
export interface IBoardCommitteeToMemberGetById extends Pick<IBoardCommitteeToMember, 'id'> {}
export interface IBoardCommitteeToMemberGetByIdRes extends IBoardCommitteeToMember {}
export interface IBoardCommitteeToMemberDbGetById extends Pick<IBoardCommitteeToMember, 'id'> {}
export interface IBoardCommitteeToMemberDbGetByIdRes extends IBoardCommitteeToMember {}

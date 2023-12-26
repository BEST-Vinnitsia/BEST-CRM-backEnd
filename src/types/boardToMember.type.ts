export interface IBoardToMember {
  id: string;
  cadence_id: string;
  board_id: string;
  member_id: string;
  create_date: Date;
}

// Create
export interface IBoardToMemberCreate extends Omit<IBoardToMember, 'id' | 'create_date'> {}
export interface IBoardToMemberCreateRes extends IBoardToMember {}
export interface IBoardToMemberDbCreate extends Omit<IBoardToMember, 'id' | 'create_date'> {}
export interface IBoardToMemberDbCreateRes extends IBoardToMember {}

// Get by list
export interface IBoardToMemberGetListRes extends IBoardToMember {}
export interface IBoardToMemberDbGetListRes extends IBoardToMember {}

// Get by id
export interface IBoardToMemberGetById extends Pick<IBoardToMember, 'id'> {}
export interface IBoardToMemberGetByIdRes extends IBoardToMember {}
export interface IBoardToMemberDbGetById extends Pick<IBoardToMember, 'id'> {}
export interface IBoardToMemberDbGetByIdRes extends IBoardToMember {}

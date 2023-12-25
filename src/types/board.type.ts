export interface IBoard {
  id: string;
  name: string;
  is_active: boolean;
  committee_is_active: boolean;
  create_date: Date;
}

// Get by id
export interface IBoardCreate extends Omit<IBoard, 'id' | 'create_date'> {}
export interface IBoardCreateRes extends IBoard {}
export interface IBoardDbCreate extends Omit<IBoard, 'id' | 'create_date'> {}
export interface IBoardDbCreateRes extends IBoard {}

// Get list
export interface IBoardGetListRes extends IBoard {}
export interface IBoardDbGetListRes extends IBoard {}

// Get by id
export interface IBoardGetById extends Pick<IBoard, 'id'> {}
export interface IBoardGetByIdRes extends IBoard {}
export interface IBoardDbGetById extends Pick<IBoard, 'id'> {}
export interface IBoardDbGetByIdRes extends IBoard {}

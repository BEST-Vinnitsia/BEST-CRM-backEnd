export interface ILgaBoard {
  id: string;
  name: string;
  is_active: boolean;
  committee_is_active: boolean;
  create_date: Date;
}

// Get by id
export interface ILgaBoardCreate extends Omit<ILgaBoard, 'id' | 'create_date'> {}
export interface ILgaBoardCreateRes extends ILgaBoard {}
export interface ILgaBoardDbCreate extends Omit<ILgaBoard, 'id' | 'create_date'> {}
export interface ILgaBoardDbCreateRes extends ILgaBoard {}

// Get by list
export interface ILgaBoardGetListRes extends ILgaBoard {}
export interface ILgaBoardDbGetListRes extends ILgaBoard {}

// Get by id
export interface ILgaBoardGetById extends Pick<ILgaBoard, 'id'> {}
export interface ILgaBoardGetByIdRes extends ILgaBoard {}
export interface ILgaBoardDbGetById extends Pick<ILgaBoard, 'id'> {}
export interface ILgaBoardDbGetByIdRes extends ILgaBoard {}

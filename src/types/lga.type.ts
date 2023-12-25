export interface ILga {
  id: string;
  event_date: Date;
  create_date: Date;
}

// Get by id
export interface ILgaCreate extends Omit<ILga, 'id' | 'create_date'> {}
export interface ILgaCreateRes extends ILga {}
export interface ILgaDbCreate extends Omit<ILga, 'id' | 'create_date'> {}
export interface ILgaDbCreateRes extends ILga {}

// Get by list
export interface ILgaGetListRes extends ILga {}
export interface ILgaDbGetListRes extends ILga {}

// Get by id
export interface ILgaGetById extends Pick<ILga, 'id'> {}
export interface ILgaGetByIdRes extends ILga {}
export interface ILgaDbGetById extends Pick<ILga, 'id'> {}
export interface ILgaDbGetByIdRes extends ILga {}

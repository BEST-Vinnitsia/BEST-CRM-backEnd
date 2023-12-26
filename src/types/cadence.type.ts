export interface ICadence {
  id: string;
  number: number;
  start_date: Date;
  end_date: Date;
  create_date: Date;
}

// Create
export interface ICadenceCreate extends Omit<ICadence, 'id' | 'create_date'> {}
export interface ICadenceCreateRes extends ICadence {}
export interface ICadenceDbCreate extends Omit<ICadence, 'id' | 'create_date'> {}
export interface ICadenceDbCreateRes extends ICadence {}

// Get by list
export interface ICadenceGetListRes extends ICadence {}
export interface ICadenceDbGetListRes extends ICadence {}

// Get by id
export interface ICadenceGetById extends Pick<ICadence, 'id'> {}
export interface ICadenceGetByIdRes extends ICadence {}
export interface ICadenceDbGetById extends Pick<ICadence, 'id'> {}
export interface ICadenceDbGetByIdRes extends ICadence {}

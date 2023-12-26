export interface IMembership {
  id: string; // uuid V4
  name: string;
  create_date: Date;
}

// Create
export interface IMembershipCreate extends Omit<IMembership, 'id' | 'create_date'> {}
export interface IMembershipCreateRes extends IMembership {}
export interface IMembershipDbCreate extends Omit<IMembership, 'id' | 'create_date'> {}
export interface IMembershipDbCreateRes extends IMembership {}

// Get list
export interface IMembershipGetListRes extends IMembership {}
export interface IMembershipDbGetListRes extends IMembership {}

// Get by id
export interface IMembershipGetById extends Pick<IMembership, 'id'> {}
export interface IMembershipGetByIdRes extends IMembership {}
export interface IMembershipDbGetById extends Pick<IMembership, 'id'> {}
export interface IMembershipDbGetByIdRes extends IMembership {}

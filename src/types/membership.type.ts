export interface IMembership {
  id: string; // uuid V4
  name: string;
  create_date: Date;
}

export interface IMembershipGetById extends Pick<IMembership, 'id'> {}
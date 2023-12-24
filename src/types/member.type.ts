export interface IMember {
  id: string; // uuid V4
  email: string; // demo@gmail.com
  password: string;

  surname: string;
  full_name: string;
  middle_name: string;
  birthday: Date /* 
  const currentDate = new Date();
  const isoDateTimeString = currentDate.toISOString();

  const unixTimeZero = Date.parse('2023-12-23T10:38:29.000Z');
 */;

  group: string; // УБ-21б
  faculty: string; // ФМІБ

  // updated in the future
  // recruitment_id: string; // uuid V4

  membership_id: string; // uuid V4

  clothing_size: string; // L

  // updated in the future
  // home_address: string; // м. Вінниця, вул. Келицька 100
  // public_profile: boolean; // true

  create_date: Date;
}

export interface IMemberCreate
  extends Pick<
    IMember,
    'email' | 'password' | 'surname' | 'full_name' | 'middle_name' | 'birthday' | 'group' | 'faculty' | 'membership_id'
  > {}

export interface IMemberGet extends Omit<IMember, 'password'> {}
export interface IMemberGetById extends Pick<IMember, 'id'> {}
export interface IMemberGetByEmail extends Pick<IMember, 'email'> {}

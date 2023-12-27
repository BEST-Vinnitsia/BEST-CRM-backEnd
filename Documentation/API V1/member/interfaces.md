
#### Member
```TS
export interface IMember {
  id: string; // uuid V4
  membership_id: string; // uuid V4
  email: string; // demo@gmail.com
  password: string;
  surname: string;
  full_name: string;
  middle_name: string;
  birthday: Date;
  group: string; // УБ-21б
  faculty: string; // ФМІБ
  clothing_size: string; // L
  create_date: Date;
}
```
#### Phone
```TS
export interface IMemberPhone {
  id: string;
  member_id: string;
  phone: string;
  create_date: Date;
}
```
#### SocialNetworks
```TS
export interface IMemberSocialNetworks {
  id: string;
  member_id: string;
  name: string;
  url: string;
  create_date: Date;
}
```
#### BestEmail
```TS
export interface IMemberBestEmail {
  id: string;
  member_id: string;
  email: string;
  create_date: Date;
}
```

# Email
```TS
export interface IMemberEmail {
  id: string;
  member_id: string;
  email: string;
  create_date: Date;
}
```

# Membership
```TS
export interface IMembership {
  id: string; // uuid V4
  name: string;
  create_date: Date;
}
```
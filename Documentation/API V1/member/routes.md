
> [!success] routes GET
> api/v/1/member/create
> api/v/1/member/list
> api/v/1/member/by-id
> api/v/1/member/by-email
> 
> api/v/1/member/best-email/create
> api/v/1/member/best-email/list
> api/v/1/member/best-email/
> 
> api/v/1/member/email/create
> api/v/1/member/email/list
> api/v/1/member/email
> 
> api/v/1/member/phone/create
> api/v/1/member/phone/list
> api/v/1/member/phone
> 
> api/v/1/member/social-networks/create
> api/v/1/member/social-networks/list
> api/v/1/member/social-networks
> 
> api/v/1/member/membership/create
> api/v/1/member/membership/list
> api/v/1/member/membership/by-id



# POST
---
#### api/v/1/member/create
```TS
export interface IMemberCreate extends Omit<IMember, 'id' | 'create_date'> {}
export interface IMemberCreateRes extends Omit<IMember, 'password'> {
  membership: IMembership;
}
```
#### api/v/1/member/best-email/create
```TS
export interface IMemberBestEmailCreate extends Omit<IMemberBestEmail, 'id' | 'create_date'> {}
export interface IMemberBestEmailCreateRes extends IMemberBestEmail {}
```
#### api/v/1/member/email/create
```TS
export interface IMemberEmailCreate extends Omit<IMemberEmail, 'id' | 'create_date'> {}
export interface IMemberEmailCreateRes extends IMemberEmail {}
```
#### api/v/1/member/phone/create
```TS
export interface IMemberPhoneCreate extends Omit<IMemberPhone, 'id' | 'create_date'> {}
export interface IMemberPhoneCreateRes extends IMemberPhone {}
```
#### api/v/1/member/social-networks/create
```TS
export interface IMemberSocialNetworksCreate extends Omit<IMemberSocialNetworks, 'id' | 'create_date'> {}
export interface IMemberSocialNetworksCreateRes extends IMemberSocialNetworks {}
```
#### api/v/1/member/membership/create
```TS
export interface IMembershipCreate extends Omit<IMembership, 'id' | 'create_date'> {}
export interface IMembershipCreateRes extends IMembership {}
```

# GET
---
#### api/v/1/member/list
```TS
export interface IMemberGetListRes extends Omit<IMember, 'password'> {
  membership: IMembership;
}
```
#### api/v/1/member/by-id
```TS
export interface IMemberGetById extends Pick<IMember, 'id'> {}
export interface IMemberGetByIdRes extends Omit<IMember, 'password'> {
  membership: IMembership;
  member_best_email: IMemberBestEmail[];
  member_email: IMemberEmail[];
  member_phone: IMemberPhone[];
}
```
#### api/v/1/member/by-email
```TS
export interface IMemberGetByEmail extends Pick<IMember, 'email'> {}
export interface IMemberGetByEmailRes extends Omit<IMember, 'password'> {}
```


#### api/v/1/member/membership/list
```TS
export interface IMembershipGetListRes extends IMembership {}
```
#### api/v/1/member/membership/by-id
```TS
export interface IMembershipGetById extends Pick<IMembership, 'id'> {}
export interface IMembershipGetByIdRes extends IMembership {}
```

# PUT
---

# DELETE
---

> [!success] routes GET
> /member/:id
> /member-and-phone/:id
> /member-and-social-networks/:id
> /member-and-best-email/:id
 
# GET
---
#### /API/V1/member/:id
```TS
interface IGetMember extends IMember {}
```
#### /API/V1/member/phone/:id
```TS
interface IGetMemberPhone extends IPhone[] {}
```
#### /API/V1/member/social-networks/:id
```TS
interface IGetMemberSocialNetworks extends ISocialNetworks[] {}
```
#### /API/V1/member/best-email/:id
```TS
interface IGetMemberBestEmail extends IBestEmail {}
```


# POST
---

# PUT
---

# DELETE
---
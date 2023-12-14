
#### IMember
```TS
interface IMember {
	id: string; // uuid V4
	email: string; // demo@gmail.com
	password: string;

	surname: string;
	full_name: string;
	middle_name: string;
	birthday: Date;

	group: string; // УБ-21б
	faculty: string; // ФМІБ

	recrutment_id: string; // uuid V4
	membership_id: string; // uuid V4
	
	clothing_size: string; // L
	home_addres: string; // м. Вінниця, вул. Келицька 100
	publick_profile: boolean; // true
}
```
#### IPhone
```TS
interface IPhone  {
	id: string; // uuid V4
	member_id: string; // uuid V4
	phone: string; // +380971234567
}
```
#### ISocialNetworks
```TS
interface ISocialNetworks  {
	id: string; // uuid V4
	member_id: string; // uuid V4
	name: string; // Telegram, LinkedIn...
	url: string; // https://...
}
```
#### IBestEmail
```TS
interface IBestEmail  {
	id: string; // uuid V4
	member_id: string; // uuid V4
	email: string;
}
```


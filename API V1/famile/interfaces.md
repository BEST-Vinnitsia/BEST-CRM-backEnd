
#### IFamily
```TS
interface IFamily {
	id: string; // uuid V4
	create_date: Date;
}
```
#### IFamilyToMember
```TS
interface IFamilyToMember {
	id: string; // uuid V4
	family_id: string; // uuid V4
	member_id: string; // uuid V4
	parent_date: Date;
	parent: boolean;
	retired_date: Date;
	retired: boolean;
}
```

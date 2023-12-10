
#### IPanish
```TS
interface IPanish {
	id: string; // uuid V4
	member_id: string; // uuid V4
	name: striing;
	event: string; // MW, LGA, Anniversary
	description: string;
	special: boolean; // true
}
```
#### IPhotoAlbum
```TS
interface IPhotoAlbum {
	id: string; // uuid V4
	member_id: string; // uuid V4
	event: string; // MW, LGA, Anniversary
	url: string;
	date: Date;
}
```

#### IForm
```TS
interface IForm {
	id: string; // uuid V4
	member_id: string; // uuid V4
	name: string;
	google_sheet_id: string;
	protect: boolean; // This form can only be seen by users who have permission
	to_submit: string; // all | notMember | observer | full | board ...
	close_date: Date;
	url: string;
}
```
---
#### IFormToMember
```TS
interface IFormToMember {
	id: string; // uuid V4
	form_id: string; // uuid V4
	member_id: string; // uuid V4
}
```
#### IClaimForm
```TS
interface IClaimForm {
	id: string; // uuid V4
	form_to_member_id: string; // uuid V4
	claim: string; // VIEW | EDIT ...
	name_en: string;
	name_ua: string;
	description_en: string;
	description_ua: string;
}
```
---
#### IInputGroup
```TS
interface IInputGroup {
	id: string; // uuid V4
	form_id: string; // uuid V4
	name: string;
	type: string; // radioButton | checkBox | select
	required: boolean;
}
```
#### IAnswerInputGroup
```TS
interface IAnswerInputGroup {
	id: string; // uuid V4
	input_group: string; // uuid V4
	answer: string;
}
```
---
#### IInput
```TS
interface IInput {
	id: string; // uuid V4
	form_id: string; // uuid V4
	name: string;
	type: string; // text | longText | date | phone | email ...
	required: boolean;
}
```

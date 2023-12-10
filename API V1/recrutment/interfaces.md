
#### IOrderJoin
```TS
interface IOrderJoin {
	id: string; // uuid V4
	recrutment_id: string; // uuid V4
	surname: string;
	middle_name: string;
	full_name: string;
	birthday: Date;
	faculty: string;
	group: string;
	date: string;
}
```
#### IRecrutment
```TS
interface IRecrutment {
	id: string; // uuid V4
	date_start: Date;
	date_end: Date;
}
```
---
#### ISocialNetworks
```TS
interface ISocialNetworks {
	id: string; // uuid V4
	order_join_id: string; // uuid V4
	name: string;
	url: string;
}
```
#### IPhone
```TS
interface IPhone {
	id: string; // uuid V4
	order_join_id: string; // uuid V4
	phone: string;
}
```
---
#### IOrderStepCall
```TS
interface IOrderStepCall {
	id: string; // uuid V4
	order_join_id: string; // uuid V4
	call: boolean;
	call_feedback: string;
	date: Date;
}
```
#### IOrderStepInterview
```TS
interface IOrderStepInterview {
	id: string; // uuid V4
	order_join_id: string; // uuid V4
	interview: boolean;
	interview_feedback: string;
	date: Date;
}
```
#### IOrderStepCaseStudy
```TS
interface IOrderStepCaseStudy {
	id: string; // uuid V4
	order_join_id: string; // uuid V4
	case_study: boolean;
	case_study_feedback: string;
	date: Date;
}
```
#### IOrderStepJoinStatys
```TS
interface IOrderStepJoinStatys {
	id: string; // uuid V4
	order_join_id: string; // uuid V4
	join_statys:boolean;
	join_feedback: string;
	date: Date;
}
```

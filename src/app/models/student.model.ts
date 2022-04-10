type gender = "male" | "female";

export interface Student {
	id: number;
	name: string;
	email: string;
	gender: gender;
	active: boolean;
}
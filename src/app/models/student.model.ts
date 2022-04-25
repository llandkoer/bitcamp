export interface Student {
	id: string;
	name: string;
	email: string;
	gender: string;
	active: boolean;
}

export interface CreateStudentDTO extends Omit<Student, 'id'> {}

export interface UpdateStudentDTO extends Partial<CreateStudentDTO> {}

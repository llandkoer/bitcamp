import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateStudentDTO, Student, UpdateStudentDTO } from 'src/app/models/student.model';

@Injectable({
	providedIn: 'root',
})
export class StudentsService {
	baseUrl = 'https://6264b1b894374a2c5068e6f8.mockapi.io/students';
	constructor(private http: HttpClient) {}

	getAllStudents() {
		return this.http.get<Student[]>(this.baseUrl);
	}

	deleteStudent(student: Student) {
		return this.http.delete(`${this.baseUrl}/${student.id}`);
	}

	createStudent(student: CreateStudentDTO) {
		return this.http.post<Student>(this.baseUrl, student);
	}

	updateStudent(id: string, dto: UpdateStudentDTO) {
		return this.http.put<Student>(`${this.baseUrl}/${id}`, dto);
	}
}

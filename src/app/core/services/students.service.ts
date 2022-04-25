import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/models/student.model';

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
}

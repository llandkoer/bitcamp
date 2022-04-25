import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class StudentsService {
	baseUrl = 'https://6264b1b894374a2c5068e6f8.mockapi.io/students';
	constructor(private http: HttpClient) {}

	getAllStudents() {
		return this.http.get(this.baseUrl);
	}
}

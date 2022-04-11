import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Student } from 'src/app/models/student.model';

@Component({
	selector: 'app-pupils',
	templateUrl: './pupils.component.html',
	styleUrls: ['./pupils.component.scss'],
})
export class PupilsComponent implements OnInit {
	displayedColumns: string[] = ['name', 'email', 'gender', 'update', 'delete'];
	students: Student[] = [
		{
			id: 1,
			name: 'John Doe',
			email: 'john@doe.com',
			gender: 'male',
			active: true,
		},
		{
			id: 2,
			name: 'Jane Doe',
			email: 'jane@doe.com',
			gender: 'female',
			active: true,
		},
		{
			id: 3,
			name: 'Charlie Doe',
			email: 'charlie@doe.com',
			gender: 'male',
			active: true,
		},
		{
			id: 4,
			name: 'Maria Doe',
			email: 'maria@doe.com',
			gender: 'female',
			active: true,
		},
		{
			id: 5,
			name: 'Alex Doe',
			email: 'alex@doe.com',
			gender: 'female',
			active: true,
		},
		{
			id: 6,
			name: 'Louis Doe',
			email: 'louis@doe.com',
			gender: 'male',
			active: true,
		},
		{
			id: 7,
			name: 'Oliver Doe',
			email: 'oliver@doe.com',
			gender: 'male',
			active: true,
		},
	];

	constructor() {}

	ngOnInit(): void {}

	deleteStudent(student: Student) {
		this.students = this.students.filter(
			(pupil) => this.students.indexOf(pupil) !== this.students.indexOf(student)
		);
	}
}

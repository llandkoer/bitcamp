import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-students',
	template: `<app-pupils></app-pupils>`,
	styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}

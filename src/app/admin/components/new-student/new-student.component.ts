import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-new-student',
	templateUrl: './new-student.component.html',
	styleUrls: ['./new-student.component.scss'],
})
export class NewStudentComponent implements OnInit {
	updateStudentForm: FormGroup = new FormGroup({
		name: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		gender: new FormControl('', [Validators.required]),
	});

	constructor(public dialogRef: MatDialogRef<NewStudentComponent>) {}

	ngOnInit(): void {}

	onSubmit() {
		if (this.updateStudentForm.status === 'VALID') {
			this.dialogRef.close({ data: this.updateStudentForm.value });
		}
	}
}

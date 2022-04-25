import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from 'src/app/core/services/students.service';
import { Student } from 'src/app/models/student.model';
import { NewStudentComponent } from '../new-student/new-student.component';

@Component({
	selector: 'app-pupils',
	templateUrl: './pupils.component.html',
	styleUrls: ['./pupils.component.scss'],
})
export class PupilsComponent implements OnInit {
	displayedColumns: string[] = ['name', 'email', 'gender', 'update', 'delete'];
	students: Student[] = [];

	constructor(
		public dialogRef: MatDialog,
		private studentsService: StudentsService
	) {}

	ngOnInit(): void {
		this.getAllStudents();
	}

	getAllStudents() {
		this.studentsService.getAllStudents().subscribe((students) => {
			this.students = students;
			console.log(this.students);
		});
	}

	deleteStudent(student: Student) {
		this.studentsService.deleteStudent(student).subscribe(() => {
			this.students = this.students.filter(
				(pupil) =>
					this.students.indexOf(pupil) !== this.students.indexOf(student)
			);
		});
	}

	openDialogAndCreateOrUpdate(student?: Student) {
		const dialog = this.dialogRef.open(NewStudentComponent);

		dialog.afterClosed().subscribe((result) => {
			if (student) {
				this.studentsService
					.updateStudent(student.id, result.data)
					.subscribe((updatedStudent) => {
						const studentIndex = this.students.indexOf(student);
						this.students[studentIndex] = {
							...updatedStudent,
							active: this.students[studentIndex].active,
						};
						this.students = [...this.students];
					});
			} else {
				this.studentsService.createStudent(result.data).subscribe((student) => {
					this.students = [...this.students, { ...student, active: true }];
				});
			}
		});
	}
}

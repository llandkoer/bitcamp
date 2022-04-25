import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { PupilsComponent } from './components/pupils/pupils.component';
import { LayoutComponent } from './components/layout/layout.component';
import { StudentsComponent } from './pages/students/students.component';
import { NewStudentComponent } from './components/new-student/new-student.component';

@NgModule({
	declarations: [
		PupilsComponent,
		LayoutComponent,
		StudentsComponent,
		NewStudentComponent,
	],
	imports: [
		CommonModule,
		StudentsRoutingModule,
		MaterialModule,
		ReactiveFormsModule,
	],
})
export class StudentsModule {}

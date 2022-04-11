import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PupilsComponent } from './admin/components/pupils/pupils.component';
import { NotFoundComponent } from './admin/pages/not-found/not-found.component';
import { LayoutComponent } from './admin/components/layout/layout.component';
import { HomeComponent } from './admin/pages/home/home.component';
import { StudentsComponent } from './admin/pages/students/students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NewStudentComponent } from './admin/components/new-student/new-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FullNamePipe } from './pipes/full-name.pipe';

@NgModule({
	declarations: [
		AppComponent,
		PupilsComponent,
		NotFoundComponent,
		LayoutComponent,
		HomeComponent,
		StudentsComponent,
		NewStudentComponent,
  FullNamePipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

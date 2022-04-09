import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/components/layout/layout.component';
import { HomeComponent } from './admin/pages/home/home.component';
import { NotFoundComponent } from './admin/pages/not-found/not-found.component';
import { StudentsComponent } from './admin/pages/students/students.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: 'home', component: HomeComponent },
			{ path: '', redirectTo: '/home', pathMatch: 'full' },
			{ path: 'students', component: StudentsComponent }
		],
	},
	{ path: '**', component: NotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

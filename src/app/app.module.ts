import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './admin/components/navbar/navbar.component';
import { ToolbarComponent } from './admin/components/toolbar/toolbar.component';
import { StudentsComponent } from './admin/components/students/students.component';
import { NotFoundComponent } from './admin/pages/not-found/not-found.component';
import { LayoutComponent } from './admin/components/layout/layout.component';
import { HomeComponent } from './admin/pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentsComponent,
    NotFoundComponent,
    LayoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

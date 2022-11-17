import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListActivityComponent } from './Components/Activity/list-activity/list-activity.component';
import { DetailsActivityComponent } from './Components/Activity/details-activity/details-activity.component';
import { RegisterActivityComponent } from './Components/Activity/register-activity/register-activity.component';
import { UpdateActivityComponent } from './Components/Activity/update-activity/update-activity.component';
import { ListCourseComponent } from './Components/Course/list-course/list-course.component';
import { DetailsCourseComponent } from './Components/Course/details-course/details-course.component';
import { RegisterCourseComponent } from './Components/Course/register-course/register-course.component';
import { UpdateCourseComponent } from './Components/Course/update-course/update-course.component';
import { ListStudentComponent } from './Components/Student/list-student/list-student.component';
import { DetailsStudentComponent } from './Components/Student/details-student/details-student.component';
import { RegisterStudentComponent } from './Components/Student/register-student/register-student.component';
import { UpdateStudentComponent } from './Components/Student/update-student/update-student.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TablesComponent } from './Components/Tables/tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    ListActivityComponent,
    DetailsActivityComponent,
    RegisterActivityComponent,
    UpdateActivityComponent,
    ListCourseComponent,
    DetailsCourseComponent,
    RegisterCourseComponent,
    UpdateCourseComponent,
    ListStudentComponent,
    DetailsStudentComponent,
    RegisterStudentComponent,
    UpdateStudentComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

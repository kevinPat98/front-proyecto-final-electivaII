import { DetailsActivityComponent } from './Components/Activity/details-activity/details-activity.component';
import { UpdateActivityComponent } from './Components/Activity/update-activity/update-activity.component';
import { ListActivityComponent } from './Components/Activity/list-activity/list-activity.component';
import { RegisterActivityComponent } from './Components/Activity/register-activity/register-activity.component';
import { DetailsCourseComponent } from './Components/Course/details-course/details-course.component';
import { UpdateCourseComponent } from './Components/Course/update-course/update-course.component';
import { RegisterCourseComponent } from './Components/Course/register-course/register-course.component';
import { ListCourseComponent } from './Components/Course/list-course/list-course.component';
import { DetailsStudentComponent } from './Components/Student/details-student/details-student.component';
import { UpdateStudentComponent } from './Components/Student/update-student/update-student.component';
import { RegisterStudentComponent } from './Components/Student/register-student/register-student.component';
import { ListStudentComponent } from './Components/Student/list-student/list-student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'students', component:ListStudentComponent},
  {path: '', redirectTo: 'students', pathMatch:'full'},
  {path : 'register-student', component: RegisterStudentComponent},
  {path : 'update-student/:id', component:UpdateStudentComponent},
  {path : 'details-student/:id', component:DetailsStudentComponent},
  {path : 'courses', component:ListCourseComponent},
  {path : 'register-course', component: RegisterCourseComponent},
  {path : 'update-course/:id', component:UpdateCourseComponent},
  {path : 'details-course/:id', component:DetailsCourseComponent},
  {path : 'activitys', component:ListActivityComponent},
  {path : 'register-activity', component: RegisterActivityComponent},
  {path : 'update-activity/:id', component:UpdateActivityComponent},
  {path : 'details-activity/:id', component:DetailsActivityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

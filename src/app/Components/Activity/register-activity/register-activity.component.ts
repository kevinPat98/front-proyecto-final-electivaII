import { CourseService } from './../../../Service/course.service';
import { ActivityService } from './../../../Service/activity.service';
import { Activity } from './../activity';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../Course/course';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register-activity',
  templateUrl: './register-activity.component.html',
  styleUrls: ['./register-activity.component.css']
})
export class RegisterActivityComponent implements OnInit {

  courses: Course[];
  activity : Activity = new Activity();

  constructor(private activityService: ActivityService, private router: Router, private courseService: CourseService) { }

  ngOnInit(): void {
    this.obtenerCourses();
  }

  saveActivity(){
    var numberValue = Number(this.activity.course);
    this.courseService.obtenerCourseId(numberValue).subscribe(dato => {
      this.activity.course = dato;
      this.activityService.registerActivity(this.activity).subscribe(dato => {
        this.irListActivity();
        swal('Actividad Guardada', `La Actividad ${this.activity.name} ha sido guardada con exito`,`success`);
      }, error => console.log(error));
    });
  }

  irListActivity(){
    this.router.navigate(['/activitys'])
  }

  onSubmit(){
    this.saveActivity();
  }

  private obtenerCourses(){
    this.courseService.obtenerLisCourse().subscribe(dato => {
      this.courses = dato;
    });
  }
}

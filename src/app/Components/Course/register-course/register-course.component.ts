import { StudentService } from './../../../Service/student.service';
import { Student } from './../../Student/student';
import { CourseService } from './../../../Service/course.service';
import { Course } from './../course';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css']
})
export class RegisterCourseComponent implements OnInit {

  students: Student[];
  course : Course = new Course();

  constructor(private courseService: CourseService, private router: Router, private studentService: StudentService) { }

  ngOnInit(): void {
    this.obtenerStudents();
  }

  saveCourse(){
    var numberValue = Number(this.course.student);
    this.studentService.obtenerStudentId(numberValue).subscribe(dato => {
      this.course.student = dato;
      this.courseService.registerCourse(this.course).subscribe(dato => {
        this.irListCourse();
        swal('Curso Guardado', `El Curso ${this.course.name} ha sido guardado con exito`,`success`);
      }, error => console.log(error));
    })
        console.log(this.course);
  }

  irListCourse(){
    this.router.navigate(['/courses'])
  }

  onSubmit(){
    this.saveCourse();
  }

  private obtenerStudents(){
    this.studentService.obtenerLisStudent().subscribe(dato => {
      this.students = dato;
    })
  }

}

import { StudentService } from 'src/app/Service/student.service';
import { Activity } from './../../Activity/activity';
import { Student } from './../../Student/student';
import { CourseService } from './../../../Service/course.service';
import { Course } from './../course';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.component.html',
  styleUrls: ['./details-course.component.css']
})
export class DetailsCourseComponent implements OnInit {

  id: number;
  course: Course;
  auxStudent: Array<Student> = [];
  auxActivities: Array<Activity> = [];
  students1: Array<Student> = [];
  students: Student[];
  auxCourse : Course = new Course();

  constructor(
    private route: ActivatedRoute,
    private coursesService: CourseService,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.obtenerStudents();
    this.id = this.route.snapshot.params['id'];
    this.course = new Course();
    this.coursesService.obtenerCourseId(this.id).subscribe((dato) => {
      this.course = dato;
      if(this.course.student == null){
        this.course.student = new Student;
      }else{
        this.auxStudent.push(this.course.student);
      }
      // for (const course in this.course.student) {
      //   if (Object.prototype.hasOwnProperty.call(this.course.student, course)) {
      //     var elem = this.course.student;
      //     console.log("elemento aux", elem);
      //     this.auxStudent.push(this.course.student);
      //     //console.log("Estudiante", this.auxStudent);
      //   }
      // }
      for (const course in this.course.activities) {
        if (Object.prototype.hasOwnProperty.call(this.course.activities, course)) {
          this.auxActivities.push(this.course.activities[course]);
          console.log("Actividad", this.auxActivities);
        }
      }
      swal(`Detalles del curso ${this.course.name}`);
    });
  }
  obtenerStudents() {
    this.studentService.obtenerLisStudent().subscribe(dato => {
      console.log(dato);
      for (let i = 0; i < dato.length; i++) {
        for (let j = 0; j < this.auxStudent.length; j++) {
          if(dato[i].id != this.auxStudent[j].id){
            //this.students1 = dato;
            this.students1.push(dato[i]);
          }
        }
      }
      this.students = this.students1;
    })
  }

  updateCourse(id: number) {
    this.router.navigate(['update-course', id]);
  }

  deleteCourse(id: number) {
    this.coursesService.deleteCourse(id).subscribe((dato) => {
      this.router.navigate(['/courses']);
    });
  }

  onSubmit(){
    this.saveCurse();
  }

  private saveCurse(){
    var numberValue = Number(this.course.student);
    this.studentService.obtenerStudentId(numberValue).subscribe(dato => {
      this.course.student = dato;
      this.coursesService.registerCourse(this.course).subscribe(dato => {
        this.obtenerStudents();
        swal('Curso Guardado', `El Curso ${this.course.name} ha sido guardado con exito`,`success`);
      }, error => console.log(error));
    })
        console.log(this.course);
  }

  listCourse() {
    this.router.navigate(['/courses']);
  }

}

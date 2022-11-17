import { Course } from './../../Course/course';
import { StudentService } from './../../../Service/student.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { map } from 'rxjs';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css'],
})
export class DetailsStudentComponent implements OnInit {
  id: number;
  student: Student;
  element: Array<Course> = [];

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.student = new Student();
    this.studentsService.obtenerStudentId(this.id).subscribe((dato) => {
      this.student = dato;
      for (const student in this.student.courses) {
        if (Object.prototype.hasOwnProperty.call(this.student.courses, student)) {
          this.element.push(this.student.courses[student]);
          // this.courses= this.student.courses[student];
          // console.log(this.courses);
        }
      }
      swal(`Detalles del Estudiante ${this.student.name}`);
    });
  }

  updateStudent(id: number) {
    this.router.navigate(['update-student', id]);
  }

  deleteStudent(id: number) {
    this.studentsService.deleteStudent(id).subscribe((dato) => {
      this.router.navigate(['/students']);
    });
  }

  listStudent() {
    this.router.navigate(['/students']);
  }
}

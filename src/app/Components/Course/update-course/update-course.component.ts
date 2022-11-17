import { CourseService } from './../../../Service/course.service';
import { Course } from './../course';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  id:number;
  course: Course;

  constructor(private route:ActivatedRoute, private coursesService:CourseService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.course = new Course();
    this.coursesService.obtenerCourseId(this.id).subscribe(dato => {
      this.course = dato;
    })
  }

  irAlaListaDeCourses(){
    this.router.navigate(['/courses']);
    swal('Curso actualizado',`El curso ${this.course.name} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.coursesService.updateCourse(this.id,this.course).subscribe(dato => {
      this.irAlaListaDeCourses();
    },error => console.log(error));
  }


}

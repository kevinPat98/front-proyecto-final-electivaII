import { CourseService } from './../../../Service/course.service';
import { Course } from './../course';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  courses: Course[];

  constructor(private courseService: CourseService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerCourses();
  }

  private obtenerCourses(){
    this.courseService.obtenerLisCourse().subscribe(dato => {
      this.courses = dato;
    })
  }

  deleteCourse(id:number){
    swal({
      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar el Curso',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    }).then((result) => {
      if(result.value){
        this.courseService.deleteCourse(id).subscribe(dato => {
          this.obtenerCourses();
          swal(
            'Cursos eliminado',
            'El curso ha sido eliminado con exito',
            'success'
          );
        })
      }
    })
  }

  updateCourse(id:number){
    this.router.navigate(['update-course',id]);
  }

  detailsCourse(id: number){
    this.router.navigate(['details-course',id]);
  }

}

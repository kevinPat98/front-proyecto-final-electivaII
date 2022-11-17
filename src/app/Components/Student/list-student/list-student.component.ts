import { StudentService } from './../../../Service/student.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  students: Student[];

  constructor(private studenService: StudentService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerStudents();
  }

  private obtenerStudents(){
    this.studenService.obtenerLisStudent().subscribe(dato => {
      this.students = dato;
    })
  }

  deleteStudent(id:number){
    swal({
      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar el Estudiante',
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
        this.studenService.deleteStudent(id).subscribe(dato => {
          this.obtenerStudents();
          swal(
            'Estudiante eliminado',
            'El estudiante ha sido eliminado con exito',
            'success'
          );
        })
      }
    })
    
  }

  updateStudent(id:number){
    this.router.navigate(['update-student',id]);
  }

  detailsStudent(id: number){
    this.router.navigate(['details-student',id]);
  }
}

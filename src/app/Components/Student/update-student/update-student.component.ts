import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/Service/student.service';
import swal from 'sweetalert2';
import { Student } from '../student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id:number;
  student: Student;

  constructor(private route:ActivatedRoute, private studentsService:StudentService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.student = new Student();
    this.studentsService.obtenerStudentId(this.id).subscribe(dato => {
      this.student = dato;
    })
  }

  irAlaListaDeStudents(){
    this.router.navigate(['/students']);
    swal('Estudiante actualizado',`El estudiante ${this.student.name} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.studentsService.updateStudent(this.id,this.student).subscribe(dato => {
      this.irAlaListaDeStudents();
    },error => console.log(error));
  }
}

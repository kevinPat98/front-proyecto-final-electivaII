import { Router } from '@angular/router';
import { StudentService } from './../../../Service/student.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})
export class RegisterStudentComponent implements OnInit {

  student : Student = new Student();

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {

  }

  saveStudent(){
    this.studentService.registerStudent(this.student).subscribe(dato => {
      this.irListStudent();
      swal('Estudiante Guardado', `El Estudiante ${this.student.name} ha sido guardado con exito`,`success`);
    }, error => console.log(error));
  }

  irListStudent(){
    this.router.navigate(['/students'])
  }

  onSubmit(){
    this.saveStudent();
  }

}

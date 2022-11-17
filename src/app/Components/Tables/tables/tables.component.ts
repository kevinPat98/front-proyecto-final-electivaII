import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/Service/student.service';
import { Student } from '../../Student/student';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  auxStudent: Array<Student> = [];
  students: Student[];

  constructor(private studenService: StudentService) { }

  ngOnInit(): void {
    this.obtenerStudents();
  }
  obtenerStudents() {
    this.studenService.obtenerLisStudent().subscribe(dato => {
      this.students = dato;
    })
  }

}

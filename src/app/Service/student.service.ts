import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../Components/Student/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "https://backen-proyecto-final-electiva.herokuapp.com/students";

  constructor(private httpStudent: HttpClient) { }

  obtenerLisStudent():Observable<Student[]>{
    return this.httpStudent.get<Student[]>(`${this.baseUrl}`)
  }

  registerStudent(Student:Student):Observable<Object>{
    return this.httpStudent.post(`${this.baseUrl}`,Student);
  }

  updateStudent(id:number, Student: Student): Observable<Object>{
    return this.httpStudent.put(`${this.baseUrl}/${id}`,Student);
  }

  obtenerStudentId(id:number):Observable<Student>{
    return this.httpStudent.get<Student>(`${this.baseUrl}/${id}`);
  }

  deleteStudent(id:number):Observable<Object>{
    return this.httpStudent.delete(`${this.baseUrl}/${id}`);
  }
}

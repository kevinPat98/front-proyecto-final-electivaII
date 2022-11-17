import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../Components/Course/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = "https://backen-proyecto-final-electiva.herokuapp.com/courses";

  constructor(private httpCourse: HttpClient) { }

  obtenerLisCourse():Observable<Course[]>{
    return this.httpCourse.get<Course[]>(`${this.baseUrl}`)
  }

  registerCourse(Course:Course):Observable<Object>{
    return this.httpCourse.post(`${this.baseUrl}`,Course);
  }

  updateCourse(id:number, Course: Course): Observable<Object>{
    return this.httpCourse.put(`${this.baseUrl}/${id}`,Course);
  }

  obtenerCourseId(id:number):Observable<Course>{
    return this.httpCourse.get<Course>(`${this.baseUrl}/${id}`);
  }

  deleteCourse(id:number):Observable<Object>{
    return this.httpCourse.delete(`${this.baseUrl}/${id}`);
  }
}

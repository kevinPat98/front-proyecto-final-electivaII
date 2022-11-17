import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../Components/Activity/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private baseUrl = "http://localhost:8080/activities";

  constructor(private httpActivity: HttpClient) { }

  obtenerLisActivity():Observable<Activity[]>{
    return this.httpActivity.get<Activity[]>(`${this.baseUrl}`)
  }

  registerActivity(Activity:Activity):Observable<Object>{
    return this.httpActivity.post(`${this.baseUrl}`,Activity);
  }

  updateActivity(id:number, Activity: Activity): Observable<Object>{
    return this.httpActivity.put(`${this.baseUrl}/${id}`,Activity);
  }

  obtenerActivityId(id:number):Observable<Activity>{
    return this.httpActivity.get<Activity>(`${this.baseUrl}/${id}`);
  }

  deleteActivity(id:number):Observable<Object>{
    return this.httpActivity.delete(`${this.baseUrl}/${id}`);
  }
}

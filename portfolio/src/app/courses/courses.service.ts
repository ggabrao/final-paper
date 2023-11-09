import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICourse } from './course.model';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {  

  constructor(private http: HttpClient) {}

  getCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>('api/courses');
  }

 /*  getCourse(id: number): Observable<ICourse> {
    const url = `api/courses/${id}`;
    return this.http.get<ICourse>(url);
  } */

  

}

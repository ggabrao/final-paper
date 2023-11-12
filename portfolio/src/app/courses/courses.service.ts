import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICourse } from './course.model';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>('api/courses');
  }

  getCourse(id: number): Observable<ICourse> {
    return this.http.get<ICourse>(`api/courses/${id}`);
  }

  addCourse(newCourse: ICourse): Observable<ICourse> {
    return this.http.post<ICourse>('api/courses', newCourse, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  };

  deleteCourse(id: number): Observable<ICourse> {
    
    return this.http.delete<ICourse>(`api/courses/${id}`, 
      this.httpOptions)
    }
  }
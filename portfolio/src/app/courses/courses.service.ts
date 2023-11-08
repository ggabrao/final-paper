import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICourse } from './course.model';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private coursesUrl = 'api/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(this.coursesUrl);
  }

  getCourse(id: number): Observable<ICourse> {
    const url = `${this.coursesUrl}/${id}`;
    return this.http.get<ICourse>(url);
  }

  

}

import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICourse } from './course.model';
import { Observable, catchError, of, tap } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';

export const courseResolver: ResolveFn<ICourse> =
  (route: ActivatedRouteSnapshot) => {
    return inject(CoursesService).getCourse(+route.paramMap.get('id')!);
  };

export const coursesResolver: ResolveFn<ICourse[]> =
  (route: ActivatedRouteSnapshot) => {
    return inject(CoursesService).getCourses();
  };

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
    return this.http.post<ICourse>('api/courses', newCourse, this.httpOptions
    )
  };

  updateCourse(course: ICourse): Observable<any> {
    return this.http.put('api/courses', course, this.httpOptions)
  }

  deleteCourse(id: number): Observable<ICourse> {
    return this.http.delete<ICourse>(`api/courses/${id}`,
      this.httpOptions)
  }
}
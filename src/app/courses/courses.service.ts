import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICourse } from './course.model';
import { Observable, catchError, of } from 'rxjs';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';

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
    return this.http.get<ICourse[]>('api/courses').pipe(catchError(this.handleError<ICourse[]>('getCourses')));
  }

  getCourse(id: number): Observable<ICourse> {
    return this.http.get<ICourse>(`api/courses/${id}`).pipe(catchError(this.handleError<ICourse>('getCourse')));
  }

  addCourse(newCourse: ICourse): Observable<ICourse> {
    return this.http.post<ICourse>('api/courses', newCourse, this.httpOptions
    ).pipe(catchError(this.handleError<ICourse>('addCourse')))
  };

  updateCourse(course: ICourse): Observable<any> {
    return this.http.put('api/courses', course, this.httpOptions)
    .pipe(catchError(this.handleError<any>('updateCourse')))
  }

  deleteCourse(id: number): Observable<ICourse> {
    return this.http.delete<ICourse>(`api/courses/${id}`,
      this.httpOptions).pipe(catchError(this.handleError<ICourse>('deleteCourse')))
  }

  //generic error Handler
  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} has the following error: ${error.body.error}`);
      return of(result as T);
    };
  }

}
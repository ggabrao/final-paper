import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ICourse } from './course.model';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const courses = [
      { id: 1, name: 'HTML', duration: 5, rating: 4 },
      { id: 2, name: 'CSS', duration: 8, rating: 1 },
      { id: 3, name: 'Javascript', duration: 15, rating: 3 },
      { id: 4, name: 'Web Design', duration: 5, rating: 0 },
      { id: 5, name: 'Angular', duration: 30, rating: 5 }
    ];
    return { courses };
  }

  genId(courses: ICourse[]): number {
    return courses.length > 0 ? Math.max(...courses.map(course => course.id)) + 1 : 0;
  }
}

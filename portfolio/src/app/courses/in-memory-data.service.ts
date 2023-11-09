import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ICourse } from './course.model';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const courses: ICourse[] = [
      { id: 1, name: 'HTML', duration: 5, rating: 5.0 },
      { id: 2, name: 'CSS', duration: 8, rating: 3.0 },
      { id: 3, name: 'Javascript', duration: 15, rating: 1.2 },
      { id: 4, name: 'Web Design', duration: 5, rating: 4.2 },
      { id: 5, name: 'Angular', duration: 30, rating: 3.8 }
    ];
    return {courses};
  }
}

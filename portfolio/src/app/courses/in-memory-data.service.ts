import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ICourse } from './course.model';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const courses: ICourse[] = [
      { id: 1, name: 'HTML', duration: 5, rating: 5 },
      { id: 2, name: 'CSS', duration: 8, rating: 3 },
      { id: 3, name: 'Javascript', duration: 15, rating: 1.2 },
      { id: 4, name: 'Web Design', duration: 5, rating: 4.2 },
      { id: 5, name: 'Angular', duration: 30, rating: 3.8 }
    ];
    return {courses};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(heroes: Hero[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}

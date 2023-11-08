import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { ICourse } from './course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'duration', 'rating', 'edit', 'remove'];
  courses: ICourse[] = [];

  constructor(private dataService:CoursesService) {
  }

  ngOnInit() {
    return this.dataService.getCourses().subscribe(data => this.courses = data);
  }

  addData() {
  }

  removeData() {
  }

  updateData() {
    throw new Error('Method not implemented.');
    }
    
}



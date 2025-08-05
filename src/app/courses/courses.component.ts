import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'crs-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  pageTitle!: string;

  constructor(private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle("API | Final Paper");
    this.pageTitle = this.title.getTitle();
  };

}
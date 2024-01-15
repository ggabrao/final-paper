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
    this.title.setTitle("API | Self-Introduction");
    this.pageTitle = this.title.getTitle();
  };

}
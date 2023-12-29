import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterService } from '../footer.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'crs-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {

  pageTitle!: string;

  constructor(private footerService: FooterService, private title: Title) {
  }

  ngOnInit() {
    this.footerService.hide();
    this.title.setTitle("API | First Angular Project");
    this.pageTitle = this.title.getTitle();
  };

  ngOnDestroy(): void {
    this.footerService.show();
  }
}
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterService } from '../footer.service';

@Component({
  selector: 'crs-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {

  constructor(private footerService: FooterService) {
  }

  ngOnInit() {
    this.footerService.hide();
  };

  ngOnDestroy(): void {
    this.footerService.show();
  }
}
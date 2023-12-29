import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { ICourse } from '../course.model';
import { FooterService } from 'src/app/footer.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'crs-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit, OnDestroy {

  selectedCourse!: ICourse;
  pageTitle!: string;

  constructor(private route: ActivatedRoute, private dataService: CoursesService, private router: Router,
    private footerService: FooterService, private title: Title) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ courseResolver }) => this.selectedCourse = courseResolver);
    this.footerService.hide();
    this.title.setTitle("Edit Course | First Angular Project");
    this.pageTitle = this.title.getTitle();
  }

  ngOnDestroy(): void {
    this.footerService.show();
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }

  onSubmit(): void {
    this.dataService.updateCourse(this.selectedCourse).subscribe(() => this.router.navigate(['/courses']));
  }
}

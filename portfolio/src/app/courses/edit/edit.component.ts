import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { ICourse } from '../course.model';

@Component({
  selector: 'crs-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {

  selectedCourse!: ICourse;

  constructor(private route: ActivatedRoute, private dataService: CoursesService, private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ courseResolver }) => this.selectedCourse = courseResolver);
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }

  onSubmit(): void {
    this.dataService.updateCourse(this.selectedCourse).subscribe(() => this.router.navigate(['/courses']));
  }
}

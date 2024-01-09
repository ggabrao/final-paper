import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../courses.service';
import { ICourse } from '../course.model';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'crs-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {

  selectedCourse!: ICourse;
  pageTitle!: string;

  constructor(private route: ActivatedRoute, private dataService: CoursesService, private router: Router,
    private title: Title, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.data.subscribe(({ courseResolver }) => this.selectedCourse = courseResolver);
    this.title.setTitle("Edit Course | First Angular Project");
    this.pageTitle = this.title.getTitle();
  }

  onCancel() {
    this.router.navigate(['/courses']);
  }

  onSubmit(): void {
    this.dataService.updateCourse(this.selectedCourse).subscribe(() => {
      this.router.navigate(['/courses']);
      this._snackBar.open(`Course id: ${this.selectedCourse.id} updated`, "", {
        duration: 2000,
        politeness: "assertive"
      });
    });
  }
}

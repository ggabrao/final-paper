import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { ICourse } from './course.model';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'crs-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'duration', 'rating', 'edit', 'remove'];
  courses: ICourse[] = [];

  constructor(private dataService: CoursesService, public dialog: MatDialog) {
  }

  ngOnInit() {
    return this.dataService.getCourses().subscribe((data: ICourse[]) => this.courses = data);
  }

  addData() {
  }

  removeData() {
  }

  updateData() {
    throw new Error('Method not implemented.');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogFormComponent);
    dialogRef.afterClosed().subscribe();
  }




}
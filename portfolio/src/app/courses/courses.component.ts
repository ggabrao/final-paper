import { Component, OnInit, ViewChild } from '@angular/core';
import { CoursesService } from './courses.service';
import { ICourse } from './course.model';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'crs-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'duration', 'rating', 'edit', 'remove'];

  courses!: ICourse[];

  @ViewChild(MatTable)
  table!: MatTable<ICourse>;

  constructor(private dataService: CoursesService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataService.getCourses().subscribe(data => this.courses = data);
  };


  deleteData(course: ICourse): void {
    this.courses = this.courses.filter(c => c !== course);
    this.dataService.deleteCourse(course.id).subscribe();
  };

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result !== null) {
        this.dataService.addCourse(result).subscribe(result => {
          if (result) {
            this.courses.push(result);
            this.table.renderRows();
          }
        })
      }
    })
  }
}
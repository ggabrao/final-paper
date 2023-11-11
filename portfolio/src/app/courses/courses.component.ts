import { Component, OnInit, ViewChild } from '@angular/core';
import { CoursesService } from './courses.service';
import { ICourse } from './course.model';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'crs-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'duration', 'rating', 'edit', 'remove'];

  dataSource = new MatTableDataSource<ICourse>();

  constructor(private dataService: CoursesService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataService.getCourses().subscribe((data: ICourse[]) => this.dataSource.data = data);
  };

  @ViewChild(MatTable)
  table!: MatTable<ICourse>;

  removeData(id: number) {
    this.dataService.deleteCourse(id).subscribe(data => console.log(data));
    console.log("deletado");
  };


  updateData() {
    throw new Error('Method not implemented.');
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog Closed");
    });
  }

}
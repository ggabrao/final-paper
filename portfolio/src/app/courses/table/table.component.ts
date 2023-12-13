import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { FooterService } from 'src/app/footer.service';
import { ICourse } from '../course.model';
import { CoursesService } from '../courses.service';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';

@Component({
  selector: 'crs-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'name', 'duration', 'rating', 'edit', 'remove'];

  courses!: ICourse[];

  @ViewChild(MatTable)
  table!: MatTable<ICourse>;

  constructor(private dataService: CoursesService, public dialog: MatDialog, private route: ActivatedRoute,
    private footerService: FooterService) {
  }

  ngOnInit() {
    this.footerService.hide();
    this.route.data.subscribe(({ coursesResolver }) => this.courses = coursesResolver);
  };

  ngOnDestroy(): void {
    this.footerService.show();
  }

  deleteData(course: ICourse): void {
    this.courses = this.courses.filter(c => c !== course);
    this.dataService.deleteCourse(course.id).subscribe();
  };

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataService.addCourse(result).subscribe(data => {
          if (data) {
            this.courses.push(data);
            this.table.renderRows();
          }
        })
      }
    })
  }
}
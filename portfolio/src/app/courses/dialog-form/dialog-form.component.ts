import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ICourse } from '../course.model';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'crs-dialog',
  templateUrl: './dialog-form.component.html',
  styleUrl: './dialog-form.component.scss'
})
export class DialogFormComponent {

  course: ICourse = {
    id: 0,
    name: "",
    duration: undefined,
    rating: undefined
  };

  constructor(
    public dialogRef: MatDialogRef<DialogFormComponent>, private dataService: CoursesService) { }


  onSubmit(newCourse: ICourse): void {   
      this.dialogRef.close(newCourse);
  };

  onCancel() {
    this.dialogRef.close();
  };


}

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

  course: any = {
    name: "",
    duration: "",
    rating: ""
  }

  constructor(
    public dialogRef: MatDialogRef<DialogFormComponent>) { }


  onCancel() {
    this.dialogRef.close(null);
  };


}

import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ICourse } from '../course.model';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'crs-dialog',
  templateUrl: './dialog-form.component.html',
  styleUrl: './dialog-form.component.scss'
})
export class DialogFormComponent {

  course: ICourse = {
    id: undefined,
    name: "",
    duration: undefined,
    rating: undefined
  };

  constructor(
    public dialogRef: MatDialogRef<DialogFormComponent>) { }


  onSubmit(f: NgForm): void {
    console.log(f.form.value);
    console.log("Form was submitted");
  }

  onNoClick() {
    throw new Error('Method not implemented.');
  }

}

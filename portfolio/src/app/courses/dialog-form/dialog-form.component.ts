import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICourse } from '../course.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'crs-dialog',
  templateUrl: './dialog-form.component.html',
  styleUrl: './dialog-form.component.scss'
})
export class DialogFormComponent implements OnInit {
onNoClick() {
throw new Error('Method not implemented.');
}
  course!: ICourse;
  courseForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogFormComponent>,private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]],
      duration: [null, [Validators.required]],
      rating: [null, [Validators.required]]
    })
  }

  onSubmit() {
    throw new Error('Method not implemented.');
    }
    
 

}

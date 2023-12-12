import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'crs-dialog',
  templateUrl: './dialog-form.component.html',
  styleUrl: './dialog-form.component.scss'
})
export class DialogFormComponent {

  course: any = {
    name: "",
    duration: undefined,
    rating: 3
  }

  constructor(
    public dialogRef: MatDialogRef<DialogFormComponent>) { }


  onCancel() {
    this.dialogRef.close(null);
  };
}

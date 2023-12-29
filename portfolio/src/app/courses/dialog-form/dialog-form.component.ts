import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'crs-dialog',
  templateUrl: './dialog-form.component.html',
  styleUrl: './dialog-form.component.scss'
})
export class DialogFormComponent {

  pageTitle!: string;

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

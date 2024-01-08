import { Component } from '@angular/core';
import { IUser } from '../user.model';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'frm-td',
  templateUrl: './forms-td.component.html',
  styleUrls: ['./forms-td.component.scss'],
})
export class FormsTdComponent {

  constructor(private _snackBar: MatSnackBar) { }

  user: IUser = {
    name: "",
    phone: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
    agreement: false
  }

  onSubmit(f: NgForm): void {
    this._snackBar.open(`Form submitted`, "" , {
      duration: 2000,
      politeness: "assertive"
    });
  }

}

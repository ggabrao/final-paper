import { Component } from '@angular/core';
import { IUser } from '../user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'frm-td',
  templateUrl: './forms-td.component.html',
  styleUrls: ['./forms-td.component.scss'],
})
export class FormsTdComponent {

  user:IUser = {
    name: "",
    age: "",
    phone: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
    notifications: "email",
    agreement: false
  }

  submitted = false;

  onSubmit(f: NgForm): void {
    console.log(f.form.value);
    this.submitted = true;     
  }
}

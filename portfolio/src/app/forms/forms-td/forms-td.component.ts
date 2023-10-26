import { Component } from '@angular/core';
import { IUser } from '../user.model';

@Component({
  selector: 'frm-td',
  templateUrl: './forms-td.component.html',
  styleUrls: ['./forms-td.component.scss'],
})
export class FormsTdComponent {

  user:IUser = {
    userName: "",
    age: 18,
    phone: 0,
    email: "",
    adress: "",
    password: "",
    notifications: "",
    agreement: false
  }

  submitted = false;

  signUp() {
    this.submitted = true;   
  }
}

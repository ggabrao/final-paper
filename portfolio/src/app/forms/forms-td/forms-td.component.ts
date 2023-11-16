import { Component } from '@angular/core';
import { IUser } from '../user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'frm-td',
  templateUrl: './forms-td.component.html',
  styleUrls: ['./forms-td.component.scss'],
})
export class FormsTdComponent {

  submitted:boolean = false;

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
    this.submitted = true;
  }

  
}

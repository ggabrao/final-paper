import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../user.model';

@Component({
  selector: 'frm-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.scss'],
})
export class FormsReactiveComponent implements OnInit {
  user: IUser | undefined;
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [null, [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.pattern("[0-9]{1,3} [0-9]{1,3} [0-9]{7,10}")],
      address: null,
      password: [null, [Validators.required, Validators.minLength(4)]],
      confirmPassword: null,
      agreement: [false, Validators.requiredTrue],
    });
  }

  populateTest(): void {
    this.userForm.setValue({
      name: 'Gabriel',
      phone: null,
      email: 'gabriel@test.com',
      address: null,
      password: 1234,
      confirmPassword: 1234,
      agreement: false,
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}

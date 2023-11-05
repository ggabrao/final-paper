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
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, Validators.pattern('[0-9]{1,3} [0-9]{1,3} [0-9]{7,10}')],
      address: null,
      password: [null, [Validators.required, Validators.minLength(4)]],
      confirmPassword: [null, [Validators.required]],
      agreement: [false, Validators.requiredTrue],
      notifications: 'email'
    });
  }

  populateTest(): void {
    this.userForm.setValue({
      name: 'Gabriel',
      email: 'gabriel@test.com',
      phone: null,
      address: null,
      password: 1234,
      confirmPassword: 1234,
      agreement: false,
      notifications: 'email'
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

  setNotification(notificationInput: string): void {

    const phoneControl = this.userForm.get('phone');
    if (notificationInput === 'text') {
      phoneControl?.addValidators(Validators.required);
    } else {
      phoneControl?.removeValidators(Validators.required);
    }
    phoneControl?.updateValueAndValidity();
  }
}

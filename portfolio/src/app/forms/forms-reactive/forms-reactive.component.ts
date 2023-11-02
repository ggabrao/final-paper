import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IUser } from '../user.model';

@Component({
  selector: 'frm-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.scss']
})
export class FormsReactiveComponent implements OnInit {  
  user:IUser | undefined;
  userForm!: FormGroup; 

  ngOnInit(): void {
    this.userForm = new FormGroup({});
  } 












}

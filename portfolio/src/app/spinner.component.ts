import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: '<mat-spinner class="spinner"></mat-spinner>',
  styles: '.spinner { position:absolute; top:50%; left:50%; transform: translate(-50%,-50%) }'
})
export class SpinnerComponent {}
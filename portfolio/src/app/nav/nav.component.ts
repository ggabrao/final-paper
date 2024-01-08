import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  mobile!: boolean;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      '(max-width: 37em)']).subscribe((result) => {
        if (result.matches) {
          this.mobile = true;
        } else {
          this.mobile = false;
        }
      }
      );
  }
}

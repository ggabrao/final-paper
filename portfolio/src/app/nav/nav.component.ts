import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  mobile!: boolean;

  constructor(public breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      '(max-width: 37em)']).subscribe(() => {
        if (breakpointObserver.isMatched('(max-width:37em)')) {
          this.mobile = true;
          console.log("mobile")
        } else {
          this.mobile = false;
          console.log("desktop")
        }
      }
      );
  }



}

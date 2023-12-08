import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';
import { Subscription } from 'rxjs';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio';
  loading = true;
  showFooter!: boolean;
  subscription!: Subscription;


  constructor(public router: Router, private footerService: FooterService) {
    router.events.subscribe((routerEvent: Event) => this.checkRouterEvent(routerEvent));
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

  ngOnInit(): void {
    this.subscription = this.footerService.showFooter.subscribe(value => this.showFooter = value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}

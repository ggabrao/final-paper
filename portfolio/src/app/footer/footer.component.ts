import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FooterService } from '../footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  myDate: Date;
  showFooter!: boolean;
  subscription!: Subscription;

  constructor(private footerService: FooterService) {
    this.myDate = new Date();
  }

  ngOnInit(): void {
    this.subscription = this.footerService.showFooter.subscribe(value => this.showFooter = value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}

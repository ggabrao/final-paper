import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { FooterService } from '../footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnDestroy {
  myDate: Date;
  subscription!: Subscription;
  showFooter!: boolean;

  constructor(private footerService: FooterService) {
    this.myDate = new Date();
    this.subscription = this.footerService.showFooter.subscribe(value => this.showFooter = value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }




}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',

})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.footerService.hide();
  }
  ngOnDestroy(): void {
    this.footerService.show();
  }

}

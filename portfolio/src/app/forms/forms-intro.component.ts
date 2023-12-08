import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterService } from '../footer.service';

@Component({
  selector: 'frm-intro',
  templateUrl: './forms-intro.component.html',
  styleUrls: ['./forms-intro.component.scss']
})

export class FormsIntroComponent implements OnInit, OnDestroy {

constructor(private footerService:FooterService) {}

  ngOnInit(): void {
    this.footerService.hide();
  }
  ngOnDestroy(): void {
    this.footerService.show();
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterService } from '../footer.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'frm-intro',
  templateUrl: './forms-intro.component.html',
  styleUrls: ['./forms-intro.component.scss']
})

export class FormsIntroComponent implements OnInit, OnDestroy {

constructor(private footerService:FooterService, private title:Title) {}

  ngOnInit(): void {
    this.footerService.hide();
    this.title.setTitle("Forms | First Angular Project");
  }
  ngOnDestroy(): void {
    this.footerService.show();
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterService } from '../footer.service';

@Component({
  selector: 'wb-website',
  templateUrl: './website.component.html',
  styleUrl: './website.component.scss'
})
export class WebsiteComponent implements OnInit, OnDestroy {

  constructor(private footerService:FooterService) {}
  
    ngOnInit(): void {
      this.footerService.hide();
    }
    ngOnDestroy(): void {
      this.footerService.show();
    }
  
  }

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterService } from '../footer.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'wb-website',
  templateUrl: './website.component.html',
  styleUrl: './website.component.scss'
})
export class WebsiteComponent implements OnInit, OnDestroy {

  constructor(private footerService:FooterService, private title:Title) {}
  
    ngOnInit(): void {
      this.footerService.hide();
      this.title.setTitle("Website | First Angular Project");
    }
    ngOnDestroy(): void {
      this.footerService.show();
    }
  
  }

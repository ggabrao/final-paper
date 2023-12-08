import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterService } from '../footer.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit, OnDestroy {

  constructor(private footerService:FooterService) {}

  ngOnInit(): void {
    this.footerService.hide();
  }
  ngOnDestroy(): void {
    this.footerService.show();
  }

}

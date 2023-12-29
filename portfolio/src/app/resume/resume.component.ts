import { Component, OnDestroy, OnInit } from '@angular/core';
import { FooterService } from '../footer.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'rsm-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit, OnDestroy {

  constructor(private footerService: FooterService, private title: Title) { }

  ngOnInit(): void {
    this.footerService.hide();
    this.title.setTitle("Resume | First Angular Project");

  }
  ngOnDestroy(): void {
    this.footerService.show();
  }

}

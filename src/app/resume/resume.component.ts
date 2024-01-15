import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'rsm-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {

  pageTitle!: string;

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("Resume | Self-Introduction");
    this.pageTitle = this.title.getTitle();
  }
}

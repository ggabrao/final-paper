import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'wb-website',
  templateUrl: './website.component.html',
  styleUrl: './website.component.scss'
})
export class WebsiteComponent implements OnInit {

  pageTitle!: string;

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("Website | Self-Introduction");
    this.pageTitle = this.title.getTitle();
  }

}

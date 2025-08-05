import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',

})
export class PageNotFoundComponent implements OnInit {

  pageTitle!: string;

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("Page not found | Final Paper");
    this.pageTitle = this.title.getTitle();
  }
}
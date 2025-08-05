import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'frm-intro',
  templateUrl: './forms-intro.component.html',
  styleUrls: ['./forms-intro.component.scss']
})

export class FormsIntroComponent implements OnInit {

  pageTitle!: string;

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("Forms | Final Paper");
    this.pageTitle = this.title.getTitle();

  }

}

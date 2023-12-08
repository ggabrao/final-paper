import { NgModule } from '@angular/core';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './website.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    WebsiteComponent
  ],
  imports: [
    SharedModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }

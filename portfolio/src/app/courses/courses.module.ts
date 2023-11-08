import { NgModule } from '@angular/core';

import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    SharedModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }

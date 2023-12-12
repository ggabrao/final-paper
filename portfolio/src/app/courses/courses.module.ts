import { NgModule } from '@angular/core';

import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoursesComponent } from './courses.component';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { EditComponent } from './edit/edit.component';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [
    CoursesComponent, DialogFormComponent, EditComponent
  ],
  imports: [
    SharedModule,
    CoursesRoutingModule,
    StarRatingModule.forChild()
  ]
})
export class CoursesModule { }

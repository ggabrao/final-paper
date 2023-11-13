import { NgModule } from '@angular/core';

import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoursesComponent } from './courses.component';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { EditComponent } from './edit/edit.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CoursesComponent,DialogFormComponent,EditComponent
  ],
  imports: [
    SharedModule,
    CoursesRoutingModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}]
  
})
export class CoursesModule { }

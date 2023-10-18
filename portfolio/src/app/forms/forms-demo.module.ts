import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FormsIntroComponent } from './forms-intro.component';
import { FormsTdComponent } from './forms-td/forms-td.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';

@NgModule({
  declarations: [FormsIntroComponent, FormsTdComponent, FormsReactiveComponent],
  imports: [SharedModule],
})
export class FormsDemoModule {}

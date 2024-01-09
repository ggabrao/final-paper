import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FormsIntroComponent } from './forms-intro.component';
import { FormsTdComponent } from './forms-td/forms-td.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';
import { FormsDemoRoutingModule } from './forms-demo-routing.module';
import { ConfirmPasswordDirective } from './forms-td/confirm-password.directive';

@NgModule({
  declarations: [FormsIntroComponent, FormsTdComponent, FormsReactiveComponent, ConfirmPasswordDirective],
  imports: [SharedModule, FormsDemoRoutingModule],
})
export class FormsDemoModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsIntroComponent } from './forms-intro.component';
import { FormsTdComponent } from './forms-td/forms-td.component';
import { FormsReactiveComponent } from './forms-reactive/forms-reactive.component';

const routes: Routes = [
      {
        path: '',
        component: FormsIntroComponent,
      },
      {
        path: 'td',
        component: FormsTdComponent,
      },
      {
        path: 'reactive',
        component: FormsReactiveComponent,
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsDemoRoutingModule {}

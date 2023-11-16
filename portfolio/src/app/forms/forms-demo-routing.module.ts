import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsIntroComponent } from './forms-intro.component';

const routes: Routes = [
      {
        path: '',
        component: FormsIntroComponent
      }      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsDemoRoutingModule {}

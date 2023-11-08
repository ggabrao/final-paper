import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    // children: [{
    //   path: 'template-driven',
    //   component: FormsTdComponent,
    // },
    // {
    //   path: 'reactive',
    //   component: FormsReactiveComponent,
    // }          
    // ]
  }      
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }

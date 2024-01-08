import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { EditComponent } from './edit/edit.component';
import { courseResolver, coursesResolver } from './courses.service';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    resolve: { coursesResolver : coursesResolver}
  },
  {
    path: ':id/edit',
    component: EditComponent,
    resolve: { courseResolver: courseResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }

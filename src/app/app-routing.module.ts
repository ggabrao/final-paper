import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'forms',
    loadChildren: () =>
      import('./forms/forms-demo.module').then((m) => m.FormsDemoModule),
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'website',
    loadChildren: () =>
      import('./website/website.module').then((m) => m.WebsiteModule),
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./resume/resume.module').then((m) => m.ResumeModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled',
  useHash:true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

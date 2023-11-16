import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NavComponent } from './header/nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './informations/intro/intro.component';
import { WhoComponent } from './introduction/who/who.component';
import { SkillsComponent } from './skills/skills/skills.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './courses/in-memory-data.service';
import { SpinnerComponent } from './spinner.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    IntroComponent,
    WhoComponent,
    SkillsComponent,
    PageNotFoundComponent,
    HomeComponent,
    SpinnerComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

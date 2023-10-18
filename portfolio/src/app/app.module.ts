import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NavComponent } from './header/nav/nav.component';
import { FooterComponent } from './footer/footer/footer.component';
import { IntroComponent } from './informations/intro/intro.component';
import { WhoComponent } from './introduction/who/who.component';
import { SkillsComponent } from './skills/skills/skills.component';
import { FormsDemoModule } from './forms/forms-demo.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home/home.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

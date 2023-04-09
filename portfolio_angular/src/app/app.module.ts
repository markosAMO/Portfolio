import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBar } from './core/components/navbar/navbar.component';
import { Main } from './core/components/main/main.component';
import { Contact } from './core/components/contact/contact.component';
import { About } from './core/components/about/about.component';
import { Projects } from './core/components/project/project.component';
import { Introduction } from './core/components/introduction/introduction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Experience } from './core/components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    Main,
    Contact,
    About,
    Projects,
    Introduction,
    Experience
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,  
    NavBar, 
    Main, 
    Contact,
    About,
    Projects,
    Introduction,
    Experience
  ]
})
export class AppModule { }

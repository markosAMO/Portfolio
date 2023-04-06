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

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    Main,
    Contact,
    About,
    Projects
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent,  NavBar, Main, Contact,
    About,
    Projects]
})
export class AppModule { }

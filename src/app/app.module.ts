import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {NgxTypedJsModule} from 'ngx-typed-js'
import { ChartModule } from 'angular-highcharts';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CertificatesComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTypedJsModule,
    ChartModule,
    ScrollToModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

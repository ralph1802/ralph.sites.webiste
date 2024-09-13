import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicPagesRoutingModule } from './basic-pages-routing.module';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    ServicesPageComponent,
  ],
  imports: [
    CommonModule,
    BasicPagesRoutingModule
  ]
})
export class BasicPagesModule { }

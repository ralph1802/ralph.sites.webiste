import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './basic/components/nav-bar/nav-bar.component';
import { FooterComponent } from './basic/components/footer/footer.component';
import { ThemeToggleComponent } from './basic/components/theme-toggle/theme-toggle.component';
import { SideBarComponent } from './basic/components/side-bar/side-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ThemeToggleComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

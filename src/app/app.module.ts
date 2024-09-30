import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './basic/components/nav-bar/nav-bar.component';
import { FooterComponent } from './basic/components/footer/footer.component';
import { ThemeToggleComponent } from './basic/components/theme-toggle/theme-toggle.component';
import { SideBarComponent } from './basic/components/side-bar/side-bar.component';
import { ThemeComboboxComponent } from './basic/components/theme-combobox/theme-combobox.component';
import { FooterNavegationComponent } from './basic/shared/footer-navegation/footer-navegation.component';
import { SocialMediaContactComponent } from './basic/shared/social-media-contact/social-media-contact.component';
import { ContactButtonComponent } from './basic/shared/contact-button/contact-button.component';
import { TitleBarIconComponent } from './basic/shared/title-bar-icon/title-bar-icon.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ThemeToggleComponent,
    ThemeComboboxComponent,
    SideBarComponent,
    FooterNavegationComponent,
    SocialMediaContactComponent,
    ContactButtonComponent,
    TitleBarIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

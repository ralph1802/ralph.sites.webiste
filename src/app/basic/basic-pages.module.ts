import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicPagesRoutingModule } from './basic-pages-routing.module';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { PresentationComponent } from './shared/presentation/presentation.component';
import { SampleImageComponent } from './shared/sample-image/sample-image.component';
import { TitleBarComponent } from './shared/title-bar/title-bar.component';
import { WhyUsCardComponent } from './shared/why-us-card/why-us-card.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { PopularDesignsComponent } from './components/popular-designs/popular-designs.component';
import { ProcessComponent } from './components/process/process.component';
import { TitleBarSimpleComponent } from './shared/title-bar-simple/title-bar-simple.component';
import { TableRow1Component } from './shared/table-row1/table-row1.component';
import { TableRow2Component } from './shared/table-row2/table-row2.component';
import { ServicesComponent } from './components/services/services.component';
import { PlansComponent } from './components/plans/plans.component';
import { PlanCardComponent } from './shared/plan-card/plan-card.component';
import { InvitationComponent } from './shared/invitation/invitation.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionComponent } from './shared/question/question.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    ServicesPageComponent,
    PresentationComponent,
    SampleImageComponent,
    TitleBarComponent,
    WhyUsCardComponent,
    WhyUsComponent,
    PopularDesignsComponent,
    ProcessComponent,
    TitleBarSimpleComponent,
    TableRow1Component,
    TableRow2Component,
    ServicesComponent,
    PlansComponent,
    PlanCardComponent,
    InvitationComponent,
    QuestionsComponent,
    QuestionComponent,
  ],
  imports: [
    CommonModule,
    BasicPagesRoutingModule
  ]
})
export class BasicPagesModule { }

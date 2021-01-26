import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

import { HeaderModule } from './header/headers.module';
import { HeroPartModule } from './hero-part/hero-part.module';

import { AppComponent } from './app.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { OfferComponent } from './offer/offer.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HeroPartModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

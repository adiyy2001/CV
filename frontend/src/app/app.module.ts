import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { HeaderModule } from './header/headers.module';
import { HeroPartModule } from './hero-part/hero-part.module';

import { AppComponent } from './app.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { OfferComponent } from './offer/offer.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AngularScrollAnimationsModule } from 'angular-scroll-animations';
import { InView } from 'src/shared/appear.directive';
import { InViewportModule } from 'ng-in-viewport';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "/assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    OfferComponent,
    ContactSectionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NgbModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HeroPartModule,
    HeaderModule,
    AngularScrollAnimationsModule,
    InViewportModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory, // exported factory function needed for AoT compilation
          deps: [HttpClient]
      },
    }),
  ],
  providers: [InView],
  bootstrap: [AppComponent],
})
export class AppModule {}

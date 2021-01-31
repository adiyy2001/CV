import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';

import { HeroPartComponent } from './hero-part.component';
import { TranslateModule } from '@ngx-translate/core';
import { AngularScrollAnimationsModule } from 'angular-scroll-animations';



@NgModule({
  declarations: [HeroPartComponent],
  imports: [
    CommonModule,
    AngularTypewriterEffectModule,
    AngularScrollAnimationsModule,
    TranslateModule.forChild()
  ],
  exports: [ HeroPartComponent ]
})
export class HeroPartModule { }

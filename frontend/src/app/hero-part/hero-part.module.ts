import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';

import { HeroPartComponent } from './hero-part.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [HeroPartComponent],
  imports: [
    CommonModule,
    AngularTypewriterEffectModule,
    TranslateModule.forChild()
  ],
  exports: [ HeroPartComponent ]
})
export class HeroPartModule { }

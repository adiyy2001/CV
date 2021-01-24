import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';

import { HeroPartComponent } from './hero-part.component';



@NgModule({
  declarations: [HeroPartComponent],
  imports: [
    CommonModule,
    AngularTypewriterEffectModule
  ],
  exports: [ HeroPartComponent ]
})
export class HeroPartModule { }

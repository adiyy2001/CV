import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroPartComponent } from './hero-part.component';



@NgModule({
  declarations: [HeroPartComponent],
  imports: [
    CommonModule
  ],
  exports: [ HeroPartComponent ]
})
export class HeroPartModule { }

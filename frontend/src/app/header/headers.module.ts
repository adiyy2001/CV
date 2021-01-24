import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { DesktopMenuComponent } from './desktop-menu/desktop-menu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    DesktopMenuComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

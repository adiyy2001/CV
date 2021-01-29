import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { DesktopMenuComponent } from './desktop-menu/desktop-menu.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    HeaderComponent,
    DesktopMenuComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild()
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

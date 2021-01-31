import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { TranslateModule } from '@ngx-translate/core';
import { DesktopMenuComponent } from './desktop-menu/desktop-menu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    DesktopMenuComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      extend: true
    })
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { HeaderComponent } from './header.component';
import { TranslateModule } from '@ngx-translate/core';
import { DesktopMenuComponent } from './desktop-menu/desktop-menu.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { AngularMaterialModule } from '../angular-material.module';


@NgModule({
  declarations: [
    HeaderComponent,
    DesktopMenuComponent,
    MobileMenuComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    TranslateModule.forChild({
      extend: true
    })
  ],
  exports: [
    HeaderComponent
  ],
  providers: [DecimalPipe]
})
export class HeaderModule { }

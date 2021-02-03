import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
export const MODULES = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class AngularMaterialModule {}

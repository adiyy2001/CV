import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

export const MODULES = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class AngularMaterialModule {}

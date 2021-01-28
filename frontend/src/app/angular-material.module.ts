import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export const MODULES = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class AngularMaterialModule {}

import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

export const MODULES = [ MatButtonModule ];

@NgModule({
    imports: [ ...MODULES ],
    exports: [ ...MODULES ]
})

export class AngularMaterialModule { }

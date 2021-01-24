import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

export const MODULES = [ MatButtonModule ];

@NgModule({
    imports: [ ...MODULES ],
    exports: [ ...MODULES ]
})

<<<<<<< HEAD
export class AngularMaterialModule { }
=======
export class AngularMaterialModule { }
>>>>>>> refs/remotes/origin/develop

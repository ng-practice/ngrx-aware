import { NgModule } from '@angular/core';

import {
  MdCardModule,
  MdButtonModule,
  MdInputModule
} from '@angular/material';

@NgModule({
  exports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule
  ]
})
export class SecurityMaterialModule { }

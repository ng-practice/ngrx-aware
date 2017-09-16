import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdToolbarModule } from '@angular/material';

import { TopNav } from './top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule,

    MdToolbarModule
  ],
  declarations: [TopNav],
  exports: [TopNav]
})
export class NavigationModule { }

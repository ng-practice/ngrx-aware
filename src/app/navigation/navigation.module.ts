import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdToolbarModule } from '@angular/material';

import { TopNav } from './top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdToolbarModule
  ],
  declarations: [TopNav],
  exports: [TopNav]
})
export class NavigationModule { }

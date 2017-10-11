import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatIconModule } from '@angular/material';

import { TopNav } from './top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatToolbarModule,
    MatIconModule
  ],
  declarations: [TopNav],
  exports: [TopNav]
})
export class NavigationModule { }

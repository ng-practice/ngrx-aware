import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular/material';

import { SecurityRoutingModule } from './security-routing.module';

import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,

    MdCardModule,

    SecurityRoutingModule
  ],
  declarations: [LoginComponent]
})
export class SecurityModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityMaterialModule } from './security-material.module';

import { UserDialog } from './shared/user-dialog/user-dialog.component';

import { LoginPage } from './login-page/login-page.component';
import { LoginDialog } from './login-dialog/login-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    SecurityMaterialModule,

    SecurityRoutingModule
  ],
  declarations: [
    UserDialog,
    LoginPage,
    LoginDialog
  ]
})
export class SecurityModule { }

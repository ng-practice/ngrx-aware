import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityMaterialModule } from './security-material.module';

import { UserDialog } from './shared/user-dialog/user-dialog.component';

import { LoginPage } from './login-page/login-page.component';
import { LoginDialog } from './login-dialog/login-dialog.component';

import { Authentication } from './services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

    SecurityMaterialModule,

    SecurityRoutingModule
  ],
  declarations: [
    UserDialog,
    LoginPage,
    LoginDialog
  ],
  providers: [
    {
      provide: Authentication,
      useClass: Authentication,
      deps: [HttpClient]
    }
  ]
})
export class SecurityModule { }

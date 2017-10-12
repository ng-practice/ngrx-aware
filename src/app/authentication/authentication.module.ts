import { MessageModal } from '../component-library';
import { ComponentLibraryModule } from '../component-library/component-library.module';
import { AuthenticationInterceptor } from './services/authentication.interceptor';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatButtonModule } from '@angular/material';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { LocalStorage } from './services/local-storage.service';

import { LoginPage, LoginDialog } from './login';
import { RegisterDialog, RegisterPage } from './registration';

import { provideAuthentication } from './services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatInputModule,
    MatButtonModule,

    ComponentLibraryModule,

    AuthenticationRoutingModule
  ],
  declarations: [
    LoginPage,
    LoginDialog,
    RegisterPage,
    RegisterDialog
  ]
})
export class AuthenticationModule {
  static forRoot(config: SignInConfig): ModuleWithProviders {
    return {
      ngModule: AuthenticationModule,
      providers: [
        LocalStorage,
        provideAuthentication(config.targetUrlAfterSigningIn),
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthenticationInterceptor,
          deps: [LocalStorage],
          multi: true
        }
      ]
    };
  }
}

export interface SignInConfig {
  targetUrlAfterSigningIn: string[];
}

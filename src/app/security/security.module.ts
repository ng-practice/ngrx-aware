import { AuthenticationInterceptor } from './services/authentication.interceptor';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityMaterialModule } from './security-material.module';

import { LocalStorage } from './services/local-storage.service';

import { UserDialog } from './shared/user-dialog/user-dialog.component';

import { LoginPage } from './containers/login-page/login-page.component';
import { LoginDialog } from './components/login-dialog/login-dialog.component';

import { provideAuthentication } from './services/authentication.service';

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
})
export class SecurityModule {
  static forRoot(config: SignInConfig): ModuleWithProviders {
    return {
      ngModule: SecurityModule,
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

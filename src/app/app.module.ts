import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgrxModule } from './store/ngrx.module';

import { ComponentLibraryModule } from './component-library/component-library.module';
import { NavigationModule } from './navigation/navigation.module';

import { AuthenticationModule } from './authentication/authentication.module';
import { AppRoutingModule } from './app-routing.module';

import { AppRoot } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppRoot],
  imports: [
    BrowserModule,

    NgrxModule,

    NavigationModule,
    ComponentLibraryModule,
    AuthenticationModule.forRoot({ targetUrlAfterSigningIn: ['notes'] }),

    AppRoutingModule
  ],
  bootstrap: [AppRoot]
})
export class AppModule { }

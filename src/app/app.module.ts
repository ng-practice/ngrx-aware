import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgrxModule } from './store/ngrx.module';

import { ComponentLibraryModule } from './component-library/component-library.module';
import { NavigationModule } from './navigation/navigation.module';

import { SecurityModule } from './security/security.module';
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
    SecurityModule.forRoot({ targetUrlAfterSigningIn: ['notes'] }),

    AppRoutingModule
  ],
  bootstrap: [AppRoot]
})
export class AppModule { }

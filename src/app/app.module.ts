import { NavigationModule } from './navigation/navigation.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NotesModule } from './notes';
import { SecurityModule } from './security/security.module';
import { AppRoutingModule } from './app-routing.module';

import { AppRoot } from './app.component';

@NgModule({
  declarations: [
    AppRoot
  ],
  imports: [
    BrowserModule,

    NavigationModule,
    SecurityModule.forRoot({ targetUrlAfterSigningIn: ['notes'] }),

    AppRoutingModule
  ],
  bootstrap: [AppRoot]
})
export class AppModule { }

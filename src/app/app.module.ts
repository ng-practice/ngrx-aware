import { SecurityModule } from './security/security.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NotesModule } from './notes';

import { AppRoot } from './app.component';

@NgModule({
  declarations: [
    AppRoot
  ],
  imports: [
    BrowserModule,

    SecurityModule,
    NotesModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppRoot]
})
export class AppModule { }

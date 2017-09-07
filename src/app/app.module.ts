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

    NotesModule
  ],
  providers: [],
  bootstrap: [AppRoot]
})
export class AppModule { }

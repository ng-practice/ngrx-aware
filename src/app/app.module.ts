import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NotesModule } from './notes/notes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    NotesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

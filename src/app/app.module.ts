import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ComponentLibraryModule } from './component-library/component-library.module';
import { NavigationModule } from './navigation/navigation.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { reducer as notesReducer } from './notes/api/reducer';

import { NotesModule } from './notes';
import { SecurityModule } from './security/security.module';
import { AppRoutingModule } from './app-routing.module';

import { AppRoot } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppRoot],
  imports: [
    BrowserModule,

    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    NavigationModule,
    ComponentLibraryModule,
    SecurityModule.forRoot({ targetUrlAfterSigningIn: ['notes'] }),

    AppRoutingModule
  ],
  bootstrap: [AppRoot]
})
export class AppModule { }

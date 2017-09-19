import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import {
  MdCardModule,
  MdProgressSpinnerModule,
  MdButtonModule,
  MdIconModule
} from '@angular/material';

import { NotesRoutingModule } from './notes-routing.module';

import { NotesGrid, NoteCard } from './board';
import { notesReducer, notesSearchReducer, Notes, NotesEffects } from './api';

@NgModule({
  imports: [
    CommonModule,

    StoreModule.forFeature('notes', {
      models: notesReducer,
      search: notesSearchReducer
    }),
    EffectsModule.forFeature([NotesEffects]),

    MdCardModule,
    MdIconModule,
    MdButtonModule,
    MdProgressSpinnerModule,

    NotesRoutingModule
  ],
  declarations: [NotesGrid, NoteCard],
  providers: [Notes]
})
export class NotesModule { }

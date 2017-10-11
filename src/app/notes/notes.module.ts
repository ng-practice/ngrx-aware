import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import {
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatIconModule
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

    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,

    NotesRoutingModule
  ],
  declarations: [NotesGrid, NoteCard],
  providers: [Notes]
})
export class NotesModule { }

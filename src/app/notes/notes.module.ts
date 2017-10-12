import { ReactiveFormsModule } from '@angular/forms';
import { ComponentLibraryModule } from './../component-library/component-library.module';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import {
  MatCardModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';

import { NotesRoutingModule } from './notes-routing.module';

import { NotesGrid, NoteCard } from './board';
import { notesReducer, notesSearchReducer, Notes, NotesEffects } from './api';
import { NoteQuickAdd } from './board/note-quick-add/note-quick-add.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    StoreModule.forFeature('notes', {
      models: notesReducer,
      search: notesSearchReducer
    }),

    EffectsModule.forFeature([NotesEffects]),

    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,

    ComponentLibraryModule,

    NotesRoutingModule
  ],
  declarations: [NotesGrid, NoteCard, NoteQuickAdd],
  providers: [Notes]
})
export class NotesModule { }

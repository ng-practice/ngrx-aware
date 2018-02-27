import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ComponentLibraryModule } from './../component-library/component-library.module';
import { Notes, NotesEffects, reducer } from './api';
import { NoteCard, NotesGrid } from './board';
import { NoteQuickAdd } from './board/note-quick-add/note-quick-add.component';
import { NotesRoutingModule } from './notes-routing.module';

import { reducers } from './api/reducers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    StoreModule.forFeature('pinboard', reducers),
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
export class NotesModule {}

import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';

import { NotesGrid, NoteCard } from './board';
import { reducers } from './api';

@NgModule({
  imports: [
    CommonModule,

    StoreModule.forFeature('notes', reducers),

    NotesRoutingModule
  ],
  declarations: [NotesGrid, NoteCard]
})
export class NotesModule { }

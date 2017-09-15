import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';

import { NotesBoard } from './containers/notes-board/notes-board.component';

@NgModule({
  imports: [
    CommonModule,

    NotesRoutingModule
  ],
  declarations: [NotesBoard]
})
export class NotesModule { }

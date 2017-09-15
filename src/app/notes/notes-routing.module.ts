import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { NotesBoard } from './containers/notes-board/notes-board.component';

const routes: Route[] = [
  { path: '', redirectTo: 'board', pathMatch: 'full' },
  { path: 'board', component: NotesBoard }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }

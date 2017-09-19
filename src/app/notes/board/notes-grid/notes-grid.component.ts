import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { AppState } from '../../../store';

import { Actions, Note, allNotes } from '../../api';

@Component({
  selector: 'awr-notes-grid',
  templateUrl: './notes-grid.component.html',
  styleUrls: ['./notes-grid.component.scss']
})
export class NotesGrid implements OnInit {
  counter$: Observable<number>;
  notes$: Observable<Note[]>;

  constructor(private store: Store<AppState>) {
    this.notes$ = this.store.select(allNotes);
  }

  ngOnInit() {
    this.store.dispatch(new Actions.LoadAll());
  }

  increment() {
    this.store.dispatch(new Actions.Increment());
  }

  decrement() {
    this.store.dispatch(new Actions.Decrement());
  }
  reset() {
    this.store.dispatch(new Actions.Reset(3));
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { AppState } from '../../../store';

import { Actions, Note } from '../../api';
import * as fromNotes from '../../api/reducers';

@Component({
  selector: 'awr-notes-grid',
  templateUrl: './notes-grid.component.html',
  styleUrls: ['./notes-grid.component.scss']
})
export class NotesGrid implements OnInit {
  isLoading$: Observable<boolean>;
  notes$: Observable<Note[]>;

  constructor(private store: Store<AppState>) {
    this.notes$ = this.store.select(fromNotes.allNotes);
    this.isLoading$ = this.store.select(fromNotes.isLoading);
  }

  ngOnInit() {
    this.store.dispatch(new Actions.LoadAll());
  }
}

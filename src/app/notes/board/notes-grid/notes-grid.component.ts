import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

import { AppState } from '../../../store';

import { Actions  } from '../../api';

@Component({
  selector: 'awr-notes-grid',
  templateUrl: './notes-grid.component.html',
  styleUrls: ['./notes-grid.component.scss']
})
export class NotesGrid {
  counter$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select('notes');
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

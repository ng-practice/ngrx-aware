import { Modal } from '../../component-library/message-modal/modal.service';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as Action from './actions';
import { Notes } from './service';

@Injectable()
export class NotesEffects {
  @Effect()
  loadAll = this.actions$.ofType(Action.LOAD_ALL).exhaustMap(action =>
    this.notes
      .all()
      .map(notes => new Action.LoadAllSuccess(notes))
      .catch(err => this.displayError(err))
  );

  constructor(
    private actions$: Actions,
    private modal: Modal,
    private notes: Notes
  ) {}

    private displayError(err: any) {
        this.modal.open('Uups', err.message, 'warn');
        return of(new Action.LoadAllError(err));
    }
}

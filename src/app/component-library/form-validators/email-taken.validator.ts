import { HttpClient } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors
} from '@angular/forms';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/first';

import { Authentication } from '../../authentication';

@Injectable()
export class EmailTaken implements AsyncValidator {
  constructor(private authentication: Authentication) {}

  validate(c: AbstractControl): Observable<ValidationErrors | null> {
    return this.check(c.value)
      .debounceTime(300)
      .distinctUntilChanged()
      .first();
  }

  check(email: string): Observable<ValidationErrors | null> {
    return this.authentication
      .isEmailTaken(email)
      .map(isEmailTaken => (isEmailTaken ? { 'email-taken': true } : null));
  }
}

export const EMAIL_TAKEN_VALIDATOR: Provider = {
  provide: EmailTaken,
  useClass: EmailTaken,
  deps: [Authentication]
};

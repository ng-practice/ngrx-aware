import { Injectable, Provider } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { LocalStorage } from './local-storage.service';
import { Modal } from '../../component-library/message-modal/modal.service';

import { Stranger } from '../models';

@Injectable()
export class Authentication {
  endpoint = 'http://localhost:4280';

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: LocalStorage,
    private modal: Modal,
    private navigationTargetAfterSignIn: string[]
  ) {}

  signIn(stranger: Stranger): Observable<string> {
    return this.http
      .post<string>(`${this.endpoint}/login`, stranger)
      .do(token => this.storage.set('token', token))
      .do(() => this.router.navigate(this.navigationTargetAfterSignIn))
      .catch(() => {
        this.modal.open(
          'Not allowed',
          'You entered the wrong email or password.',
          'warn'
        );
        return Observable.of(null);
      });
  }

  register(user: Stranger) {
    return this.http.post(`${this.endpoint}/register`, user).catch(() => {
      this.modal.open('Uups', 'Something went wrong.', 'warn');
      return Observable.of(null);
    });
  }

  isEmailTaken(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.endpoint}/is-email-taken/${email}`);
  }
}

export function provideAuthentication(
  targetUrlAfterSigningIn: string[]
): Provider {
  return {
    provide: Authentication,
    useFactory(
      http: HttpClient,
      router: Router,
      storage: LocalStorage,
      modal: Modal
    ) {
      return new Authentication(
        http,
        router,
        storage,
        modal,
        targetUrlAfterSigningIn
      );
    },
    deps: [HttpClient, Router, LocalStorage, Modal]
  };
}

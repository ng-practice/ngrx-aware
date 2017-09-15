import { Injectable, Provider } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/do';

import { LocalStorage } from './local-storage.service';

import { Stranger } from '../models';

@Injectable()
export class Authentication {
  endpoint = 'http://localhost:4280';

  constructor(
    private http: HttpClient,
    private router: Router,
    private storage: LocalStorage,
    private navigationTargetAfterSignIn: string[]) { }

  signIn(stranger: Stranger) {
    return this.http
      .post<string>(`${this.endpoint}/login`, stranger)
      .do(token => this.storage.set('token', token))
      .do(() => this.router.navigate(this.navigationTargetAfterSignIn));
  }
}

export function provideAuthentication(targetUrlAfterSigningIn: string[]): Provider {
  return {
    provide: Authentication,
    useFactory(http: HttpClient, router: Router, storage: LocalStorage) {
      return new Authentication(http, router, storage, targetUrlAfterSigningIn);
    },
    deps: [HttpClient, Router, LocalStorage]
  };
}

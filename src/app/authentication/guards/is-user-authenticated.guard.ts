import { NavigationCondition } from '../models/navigation-condition';
import { Injectable, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Route, CanLoad } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import 'rxjs/add/observable/of';

@Injectable()
export class IsUserAuthenticated implements CanLoad {
  constructor(
    private http: HttpClient,
    private router: Router,
    private checkUrl: string,
    private fallbackUrl: string) { }

  public canLoad(route: Route): Observable<boolean> {
    return this.http
      .get<boolean>(this.checkUrl)
      .do(isAuthenticated => isAuthenticated
        ? { }
        : this.useFallback)
      .catch(err => {
        this.useFallback();
        return Observable.of(false);
      });
  }

  private useFallback() {
    this.router.navigateByUrl(this.fallbackUrl);
  }
}

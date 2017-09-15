import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { LocalStorage } from './local-storage.service';

export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private storage: LocalStorage) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.storage.get('token');

    if (!token) {
      return next.handle(req);
    }

    const requestHavingToken = req.clone({
      headers: req.headers.set('Authorization', token)
    });

    return next.handle(requestHavingToken);
  }
}

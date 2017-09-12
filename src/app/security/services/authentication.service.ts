import { HttpClient } from '@angular/common/http';

import { Stranger } from '../stranger';

export class Authentication {
  endpoint = 'http://localhost:4280';

  constructor(private http: HttpClient) { }

  signIn(stranger: Stranger) {
    return this.http.post(`${this.endpoint}/login`, stranger);
  }
}

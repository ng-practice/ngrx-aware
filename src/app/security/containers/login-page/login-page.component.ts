import { Component } from '@angular/core';

import { Stranger } from '../../models';

import { Authentication } from '../../services/authentication.service';

@Component({
  selector: 'awr-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPage {
  constructor(private authentication: Authentication) {}

  signIn(stranger: Stranger) {
    this.authentication.signIn(stranger).subscribe();
  }
}

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'awr-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialog {
  login: FormGroup;

  constructor(private fb: FormBuilder) {
    this.provideEmptyLoginForm();
  }

  provideEmptyLoginForm() {
    this.login = this.fb.group({
      email: ['',   [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
}

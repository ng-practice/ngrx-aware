import { EmailTaken } from '../../../component-library/form-validators/email-taken.validator';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Stranger } from '../../models';

@Component({
  selector: 'awr-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialog {
  register: FormGroup;

  @Output() submit = new EventEmitter<Stranger>();

  constructor(private fb: FormBuilder, private emailTaken: EmailTaken) {
    this.provideEmptyRegisterForm();
   }

   provideEmptyRegisterForm() {
     this.register = this.fb.group({
       email: ['', Validators.email, (c) => this.emailTaken.validate(c)],
       password: ['', Validators.required]
     });
   }

   submitCredentials() {
    const candidate = new Stranger(
      this.register.controls.email.value,
      this.register.controls.password.value
    );

    this.submit.emit(candidate);
    this.register.controls.password.reset();
  }
}

import { EmailTaken } from '../../../component-library/form-validators/email-taken.validator';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'awr-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialog {
  register: FormGroup;

  constructor(private fb: FormBuilder, private emailTaken: EmailTaken) {
    this.provideEmptyRegisterForm();
   }

   provideEmptyRegisterForm() {
     this.register = this.fb.group({
       email: ['', Validators.email, (c) => this.emailTaken.validate(c)],
       password: ['', Validators.required]
     });
   }
}

import { Modal } from '../../../component-library/message-modal/modal.service';
import { Component } from '@angular/core';

import { Authentication } from '../../services';
import { Stranger } from '../../models';

@Component({
  selector: 'awr-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPage {
  constructor(private authentication: Authentication, private modal: Modal) {}

  register(stranger: Stranger) {
    this.authentication
      .register(stranger)
      .subscribe(result =>
        this.modal.open('Success', result.message, 'accent')
      );
  }
}

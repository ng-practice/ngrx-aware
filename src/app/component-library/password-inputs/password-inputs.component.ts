import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessor } from '@angular/forms/src/directives';
import { Component, forwardRef, OnInit } from '@angular/core';

@Component({
  selector: 'awr-password-inputs',
  templateUrl: './password-inputs.component.html',
  styleUrls: ['./password-inputs.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordInputs),
    multi: true
  }]
})
export class PasswordInputs implements ControlValueAccessor {
  password: string;
  verification: string;

  propagatePassword: (password: string) => void;

  public writeValue(password: string): void {
    if (!password) {
      this.password = password;
      this.verification = password;
    }

    this.password = password;
  }

  public registerOnChange(propagatePassword: any): void {
    this.propagatePassword = propagatePassword;
  }

  public registerOnTouched(fn: any): void {
    /** Noop */
  }

  public setDisabledState(isDisabled: boolean): void {
    throw new Error('Not implemented yet.');
  }

  raisePasswordCange() {
    if (this.password === this.verification) {
      this.propagatePassword(this.password);
    } else {
      this.propagatePassword(null);
    }
  }
}

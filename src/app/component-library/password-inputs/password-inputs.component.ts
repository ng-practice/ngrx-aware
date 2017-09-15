import { ControlValueAccessor } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'awr-password-inputs',
  templateUrl: './password-inputs.component.html',
  styleUrls: ['./password-inputs.component.scss']
})
export class PasswordInputs implements ControlValueAccessor {
  password: string;
  verification: string;

  propagatePassword: (password: string) => void;

  public writeValue(password: string): void {
    this.password = password;
  }

  public registerOnChange(propagatePassword: any): void {
    this.propagatePassword = propagatePassword;
  }

  public registerOnTouched(fn: any): void {
    throw new Error('Not implemented yet.');
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

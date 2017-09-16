import { NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Directive, forwardRef } from '@angular/core';

import { EmailTaken } from './email-taken.validator';

@Directive({
  selector: '[emailTaken]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => EmailTakenTemplateValidator),
    multi: true
  }]
 })
export class EmailTakenTemplateValidator extends EmailTaken { }

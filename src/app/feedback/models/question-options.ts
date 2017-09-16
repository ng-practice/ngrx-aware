import { AsyncValidator, Validator } from '@angular/forms';

export interface QuestionOptions<T> {
  value?: T;
  key?: string;
  placeholder?: string;
  validators?: Validator[];
  asyncValidators?: AsyncValidator[];
  order?: number;
  controlType?: string;
}

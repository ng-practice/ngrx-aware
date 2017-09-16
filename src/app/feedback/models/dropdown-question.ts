import { QuestionOptions } from './question-options';
import { QuestionBase } from './question-base';

export class DropdownQuestion extends QuestionBase<string> {
  controlType = 'dropdown';
  options: Map<string, string>;

  constructor(
    questionOptions: QuestionOptions<string> = {},
    options: Map<string, string>
  ) {
    super(questionOptions);
    this.options = options || new Map<string, string>();
  }
}

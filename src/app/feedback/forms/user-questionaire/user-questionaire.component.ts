import { DropdownQuestion } from '../../models/dropdown-question';
import { TextboxQuestion } from '../../models/question-textbox';
import { QuestionBase } from '../../models/question-base';
import { FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { QuestionnaireBuilder } from '../../services/questionnaire-builder';

@Component({
  selector: 'awr-user-questionaire',
  templateUrl: './user-questionaire.component.html',
  styleUrls: ['./user-questionaire.component.scss']
})
export class UserQuestionnaire implements OnInit {
  questions: QuestionBase<any>[];
  questionnaire: FormGroup;

  constructor(private qb: QuestionnaireBuilder) { }

  ngOnInit() {
    this.questions = this.provideQuestions();
    this.questionnaire = this.qb.group(this.questions);
  }

  submit() {
    console.log(this.questionnaire.value);
  }

  provideQuestions(): QuestionBase<any>[] {
    const questions =  [
      new DropdownQuestion(
        {
          key: 'subject',
          placeholder: 'Subject...',
          validators: [Validators.required],
          order: 1
        },
        [
          { key: 'infrastructure', value: 'IT Infrastructure' },
          { key: 'sales', value: 'Sales Question' }
        ]),
      new TextboxQuestion({
        key: 'firstName',
        placeholder: 'First name',
        validators: [Validators.required],
        order: 2
      }, 'text'),
      new TextboxQuestion({
        key: 'question',
        placeholder: 'Type your question',
        validators: [Validators.required],
        order: 3
      }, 'text'),
    ];

    return questions.sort((current, next) => current.order - next.order);
  }
}

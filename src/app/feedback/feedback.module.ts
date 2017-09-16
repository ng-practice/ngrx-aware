import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MdSelectModule, MdInputModule, MdButtonModule } from '@angular/material';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { ComponentLibraryModule } from '../component-library/component-library.module';

import { QuestionnaireBuilder } from './services/questionnaire-builder';

import { UserQuestionnaire, DynamicFormQuestion } from './forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MdInputModule,
    MdSelectModule,
    MdButtonModule,

    ComponentLibraryModule,

    FeedbackRoutingModule
  ],
  declarations: [UserQuestionnaire, DynamicFormQuestion],
  providers: [
    QuestionnaireBuilder
  ]
})
export class FeedbackModule { }

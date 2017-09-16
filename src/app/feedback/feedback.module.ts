import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { UserQuestionaireComponent } from './user-questionaire/user-questionaire.component';

@NgModule({
  imports: [
    CommonModule,
    FeedbackRoutingModule
  ],
  declarations: [UserQuestionaireComponent]
})
export class FeedbackModule { }

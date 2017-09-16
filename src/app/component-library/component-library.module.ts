import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injector,
  NgModule,
  ViewContainerRef
} from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MdCardModule, MdButtonModule, MdInputModule } from '@angular/material';

import { MODAL } from './message-modal/modal.service';

import {
  EmailTakenTemplateValidator,
  EMAIL_TAKEN_VALIDATOR
} from './form-validators';

import { MessageModal } from './message-modal/message-modal.component';
import { PasswordInputs } from './password-inputs/password-inputs.component';

import { AddClassesOnClick } from './directives/append-class-on-click.directive';

@NgModule({
  imports: [
    CommonModule,

    FormsModule,

    MdCardModule,
    MdButtonModule,
    MdInputModule
  ],
  declarations: [
    EmailTakenTemplateValidator,
    MessageModal,
    PasswordInputs,
    AddClassesOnClick
  ],
  exports: [EmailTakenTemplateValidator, AddClassesOnClick, PasswordInputs],
  entryComponents: [MessageModal],
  providers: [EMAIL_TAKEN_VALIDATOR, MODAL]
})
export class ComponentLibraryModule {}

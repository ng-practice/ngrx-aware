import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injector,
  NgModule,
  ViewContainerRef
} from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import {
  MdCardModule,
  MdButtonModule,
  MdInputModule,
  MdIconModule
} from '@angular/material';

import { MODAL } from './message-modal/modal.service';

import {
  EmailTakenTemplateValidator,
  EMAIL_TAKEN_VALIDATOR
} from './form-validators';

import { MessageModal } from './message-modal/message-modal.component';
import { PasswordInputs } from './password-inputs/password-inputs.component';

import { NotFound } from './not-found/not-found.component';

import { AddClassesOnClick } from './directives/append-class-on-click.directive';

@NgModule({
  imports: [
    CommonModule,

    FormsModule,

    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdIconModule
  ],
  declarations: [
    EmailTakenTemplateValidator,
    MessageModal,
    PasswordInputs,
    AddClassesOnClick,
    NotFound
  ],
  exports: [
    EmailTakenTemplateValidator,
    AddClassesOnClick,
    PasswordInputs,
    NotFound
  ],
  entryComponents: [MessageModal],
  providers: [EMAIL_TAKEN_VALIDATOR, MODAL, NotFound]
})
export class ComponentLibraryModule {}

import { FormsModule } from '@angular/forms';
import { Modal } from './message-modal/modal.service';
import { ApplicationRef, ComponentFactoryResolver, Injector, NgModule, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdButtonModule, MdInputModule } from '@angular/material';

import { MessageModal } from './message-modal/message-modal.component';
import { AddClassesOnClick } from './directives/append-class-on-click.directive';
import { PasswordInputs } from './password-inputs/password-inputs.component';

@NgModule({
  imports: [
    CommonModule,

    FormsModule,

    MdCardModule,
    MdButtonModule,
    MdInputModule
  ],
  declarations: [MessageModal, AddClassesOnClick, PasswordInputs],
  exports: [PasswordInputs],
  entryComponents: [MessageModal],
  providers: [{
    provide: Modal,
    useClass: Modal,
    deps: [ApplicationRef, Injector, ComponentFactoryResolver]
  }]
})
export class ComponentLibraryModule { }

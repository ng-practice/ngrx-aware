import { Modal } from './message-modal/modal.service';
import { ApplicationRef, ComponentFactoryResolver, Injector, NgModule, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdButtonModule, ComponentPortal } from '@angular/material';

import { MessageModal } from './message-modal/message-modal.component';
import { AddClassesOnClick } from './directives/append-class-on-click.directive';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule
  ],
  declarations: [MessageModal, AddClassesOnClick],
  entryComponents: [MessageModal],
  providers: [{
    provide: Modal,
    useClass: Modal,
    deps: [ApplicationRef, Injector, ComponentFactoryResolver]
  }]
})
export class ComponentLibraryModule { }

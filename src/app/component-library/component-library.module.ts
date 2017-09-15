import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule, MdButtonModule } from '@angular/material';

import { MessageModal } from './message-modal/message-modal.component';
import { AddClassesOnClick } from './directives/append-class-on-click.directive';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule
  ],
  declarations: [MessageModal, AddClassesOnClick],
  exports: [MessageModal]
})
export class ComponentLibraryModule { }

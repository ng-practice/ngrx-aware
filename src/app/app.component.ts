import { Component, ViewContainerRef } from '@angular/core';

import { ViewContainerProvider } from './component-library/contracts';

@Component({
  selector: 'awr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppRoot implements ViewContainerProvider {
  constructor(public root: ViewContainerRef) {}
 }

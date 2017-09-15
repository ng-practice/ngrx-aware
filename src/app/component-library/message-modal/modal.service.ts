import { MessageModal } from '../';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Host,
  Injectable,
  Injector,
  ViewContainerRef,
} from '@angular/core';

@Injectable()
export class Modal {
  _viewContainer: ViewContainerRef;

  modal: ComponentRef<MessageModal>;

  set viewContainer(viewContainer: ViewContainerRef) {
    if (!viewContainer) {
      throw new Error('Please implement ViewContainerInterface ' +
                      'in your AppComponent');
    }

    this._viewContainer = viewContainer;
  }

  get viewContainer(): ViewContainerRef {
    return this._viewContainer;
  }

  constructor(
    private app: ApplicationRef,
    private injector: Injector,
    private resolver: ComponentFactoryResolver
  ) {
    this.viewContainer = app.components[0].instance.root;
  }

  open(title: string, message: string) {
    const factory = this.resolver.resolveComponentFactory(MessageModal);
    this.modal = this.viewContainer.createComponent(factory);

    this.modal.instance.title = title;
    this.modal.instance.message = message;
    this.modal.instance.color = 'warn';

    this.modal.instance.close.subscribe(() => this.destroy());
  }

  private destroy() {
    this.modal.destroy();
  }
}

import {
  Component,
  ElementRef,
  Input,
  QueryList,
  Renderer2,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'awr-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModal {
  @Input() title: string;
  @Input() message: string;
  @Input() color = 'basic';

  get closables(): NodeListOf<HTMLElement> {
    return this.element.nativeElement.querySelectorAll('.closable');
  }

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  closeModal() {
    for (let i = 0; i < this.closables.length; i++) {
      this.renderer.addClass(this.closables[i], 'closed');
    }
  }

  openModal() {
    for (let i = 0; i < this.closables.length; i++) {
      this.renderer.removeClass(this.closables[i], 'closed');
    }
  }
}

import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[addClassesOnClick]'
})
export class AddClassesOnClick implements AfterViewInit {
  @Input() addClassesOnClick: string[];
  @Input() trigger: HTMLElement;

  get element(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (this.trigger) {
      this.setupClickHandlerFor(this.trigger);
    } else {
      this.setupClickHandlerFor(this.element);
    }
  }

  private setupClickHandlerFor(trigger: HTMLElement) {
    this.renderer.listen(trigger, 'click', () => this.addClasses());
  }

  private addClasses() {
    this.renderer.addClass(this.element, this.addClassesOnClick.join(' '));
  }
}

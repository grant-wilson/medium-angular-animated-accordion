import { Directive, ElementRef, afterNextRender } from '@angular/core';
import autoAnimate from '@formkit/auto-animate';

@Directive({
  selector: '[appAutoAnimate]',
  standalone: true,
})
export class AutoAnimateDirective {
  constructor(elementRef: ElementRef) {
    afterNextRender(() => {
      autoAnimate(elementRef.nativeElement);
    });
  }
}

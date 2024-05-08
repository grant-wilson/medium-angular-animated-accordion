import { Component, model } from '@angular/core';
import { AutoAnimateDirective } from '../auto-animate.directive';

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css',
  hostDirectives: [AutoAnimateDirective],
})
export class AccordionItemComponent {
  expanded = model(false);
  toggle() {
    this.expanded.update((expanded) => !expanded);
  }
}

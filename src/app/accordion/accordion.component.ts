import {
  Component,
  OutputRefSubscription,
  contentChildren,
  effect,
} from '@angular/core';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  private items = contentChildren(AccordionItemComponent);
  private subscriptions: Map<AccordionItemComponent, OutputRefSubscription> =
    new Map();

  constructor() {
    effect(() => {
      const items = this.items();
      // Add subscriptions for each item
      for (const item of items) {
        if (this.subscriptions.has(item)) {
          continue;
        }
        this.subscriptions.set(
          item,
          item.expanded.subscribe((expanded) => {
            if (expanded) {
              this.closeOtherItems(item);
            }
          }),
        );
      }
      // Remove subscriptions for items that are no longer in the list
      for (const [item, subscription] of this.subscriptions) {
        if (!items.includes(item)) {
          subscription.unsubscribe();
          this.subscriptions.delete(item);
        }
      }
    });
  }

  private closeOtherItems(item: AccordionItemComponent) {
    for (const otherItem of this.items()) {
      if (otherItem !== item) {
        otherItem.expanded.set(false);
      }
    }
  }
}

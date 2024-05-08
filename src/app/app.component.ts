import { Component } from '@angular/core';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';
import { AccordionComponent } from './accordion/accordion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionComponent, AccordionItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'medium-angular-animated-accordion';
}

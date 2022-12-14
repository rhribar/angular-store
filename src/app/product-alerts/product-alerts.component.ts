import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  // this indicates that the product will be passed in and defined from the parent side?
  @Input() product: Product | undefined;
  // emits an event to outside when the value of notify changes
  @Output() notify = new EventEmitter();
}

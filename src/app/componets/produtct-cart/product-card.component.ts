import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../services/api.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() addToCartEvent = new EventEmitter<Product>();

  addToCart() {
    this.addToCartEvent.emit(this.product);
  }
}

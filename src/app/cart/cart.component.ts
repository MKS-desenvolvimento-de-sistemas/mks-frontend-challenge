import { Component } from '@angular/core';
import { Product } from '../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart: Product[] = [
    // Mock data for demonstration
    { id: 1, name: 'iPhone X 128 GB', description: '...', price: 2000.1 }
  ];

  calculateTotal(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}

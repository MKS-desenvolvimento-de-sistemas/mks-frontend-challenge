import { Component, OnInit } from '@angular/core';
import { ApiService, Product } from '..//services/api.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  products: Product[] = [];
  isLoading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.fetchProducts().then(products => {
      this.products = products;
      this.isLoading = false;
    });
  }

  addToCart(product: Product) {
    // Implementar a lógica de adicionar ao carrinho
    console.log('Adicionar ao carrinho:', product);
  }
}

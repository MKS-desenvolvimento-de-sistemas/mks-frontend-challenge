import { Injectable } from '@angular/core';
import axios from 'axios';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  async fetchProducts(): Promise<Product[]> {
    const response = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products');
    return response.data.products;
  }
}

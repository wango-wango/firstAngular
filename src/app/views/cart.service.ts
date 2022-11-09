import { Injectable } from '@angular/core';
import { Product } from '../shared/model/vo/productList/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // default data
  items: Product[] = [];

  // add product to items 
  addToCart(product: Product){
    this.items.push(product);
  }

  // get items from Cart
  getItems(){
    return this.items;
  }

  // clear items
  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  constructor(private http:HttpClient) { }
}

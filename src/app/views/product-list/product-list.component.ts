import { Component, OnInit } from '@angular/core';
import { products } from '../../shared/model/vo/productList/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = products;
  //  share 按鈕觸發事件
  share() {
    window.alert('The product has been shared!');
  }

  // Notify 按鈕觸發事件在觸發此function
  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }
  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

}

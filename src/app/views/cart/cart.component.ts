import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // fromBuilder 語法糖
  // 簡化了 FormControl, FormGroup, FormArray
  
  checkoutForm = this.formBuilder.group({
    name:'',
    address:''
  })

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }

  // 利用 carService 取得購物車資料
  items = this.cartService.getItems();
  
 

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
  }

}

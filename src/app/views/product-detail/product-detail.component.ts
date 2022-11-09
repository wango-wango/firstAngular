import { Component, OnInit } from '@angular/core';
// Angular 路由器載入的每個元件都有自己專屬的 ActivatedRoute。
// ActivatedRoute 中包含有關路由和路由引數的資訊。
import { ActivatedRoute } from '@angular/router';
// 取得商品資料
import { Product, products } from '../../shared/model/vo/productList/products';

// 橋接器
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  // 引入 product 
  product : Product | undefined;

  // 透過把 private route: ActivatedRoute 新增為建構函式括號內的引數，
  // 來把 ActivatedRoute 注入到 constructor() 中。
  constructor(private route: ActivatedRoute,  private cartService: CartService) { }

  /*
    addToCart() 方法做了如下事情:
      以當前'product'作為引數
      使用 CartService addToCart() 方法去新增產品到購物車中
      顯示一條你已經添加了一個產品到購物車到訊息 
  */
  addToCart( product : Product ){
    this.cartService.addToCart(product);
    window.alert(`Your product: ${product.name}  has been added to the cart!`);
  }


  ngOnInit(): void {

    // 取得現在路徑的參數
  const routeParams = this.route.snapshot.params;

   // 取得 productId 轉成 Number
  const productIdFromRoute = Number(routeParams['productId']);

  // 跟參數做比對後 
  this.product = products.find(product => product.id === productIdFromRoute);
  }

}

import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../shared/model/vo/productList/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertsComponent implements OnInit {
  // @Input() 後面放父層傳來的 props 用 !: 去設定他的 interface 
  /* 
    等同於這個意思
    @Input() product111!: {
        id: number;
        name: string;
        price: number;
        description: string;
    }
  */
    @Input() product111!: Product;

    // @Output() 傳送事件給父層
    // 使用 @Output() 自定義 notify111 屬性的值發生變化時引發一個“事件”。
    @Output() notify111 = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}

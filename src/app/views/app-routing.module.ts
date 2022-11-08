import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';


const routes: Routes = [
  {
    path: '', 
    component: HomepageComponent,
  },
  {
    path: 'product', 
    component: ProductListComponent,
    children: [
      { path: 'detail', component: ProductDetailComponent }
    ]
  },
  {
    path: 'product/:productId', component: ProductDetailComponent 
  },
  {
    path: 'cart', component: CartComponent
  },
  { path: 'shipping', component: ShippingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

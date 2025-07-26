import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartStoreService } from './cart-store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CartStoreService]
})
export class CartSharedModule {
  constructor(private cartStoreService: CartStoreService) {

  }

  getCartStoreService() {
    return this.cartStoreService;
  }
}

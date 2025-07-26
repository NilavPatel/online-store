import { Component, createNgModule, Injector, NgModuleRef } from '@angular/core';
import { Product, ProductService } from '../products.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] = [];
  cartService: any;

  constructor(
    private productService: ProductService,
    private router: Router,
    private injector: Injector
  ) {
    this.getCartService().then((cartService) => {
      this.cartService = cartService;
    });
  }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

  viewDetails(id: number): void {
    this.router.navigate(['/products/list', id]);
  }

  addToCart(item: Product) {
    this.cartService.addItem({ ...item, quantity: 1 });
  }

  async getCartService() {
    const data = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4404/remoteEntry.js',
      exposedModule: './CartSharedModule',
    });
    const module = data['CartSharedModule'];
    const moduleObject: any = createNgModule(module, this.injector);
    return moduleObject.instance.getCartStoreService()
  }
}

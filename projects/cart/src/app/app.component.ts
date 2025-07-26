import { Component, createNgModule, Injector, ViewEncapsulation } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  cartService: any;
  cartItems: any[] = [];

  constructor(private injector: Injector) {
    this.getCartService().then((cartService) => {
      this.cartService = cartService;

      this.cartService.cart$.subscribe((data: any) => {
        this.cartItems = data;
      });
    });
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

  remove(id: any) {
    this.cartService.removeItem(id);
  }
}

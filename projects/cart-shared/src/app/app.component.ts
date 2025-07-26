import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartSharedModule } from './cart-shared/cart-shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartSharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cart-shared';
}

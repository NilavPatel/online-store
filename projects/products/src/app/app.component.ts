import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AUTH_SERVICE_TOKEN, AuthService, User } from 'mod-fed-helper';
import { ProductService } from './products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ProductService],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  user: User | undefined;
  constructor(@Inject(AUTH_SERVICE_TOKEN) private authService: AuthService, private router: Router) {
    if (this.authService.isAuthenticated()) {
      this.user = this.authService.getUserDetails();
    } else {
      this.router.navigate(["/login"]);
    }
  }
}

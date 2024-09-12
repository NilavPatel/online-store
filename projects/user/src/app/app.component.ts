import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AUTH_SERVICE_TOKEN, AuthService } from 'mod-fed-helper';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  userName: string = '';
  password: string = '';

  constructor(@Inject(AUTH_SERVICE_TOKEN) private authService: AuthService, private router: Router) {

  }

  login() {
    this.authService.setUserDetails(this.userName, this.password);
    this.router.navigate(['/products']);
  }
}

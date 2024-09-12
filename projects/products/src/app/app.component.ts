import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AUTH_SERVICE_TOKEN, AuthService } from 'mod-fed-helper';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  user: any = null;
  constructor(@Inject(AUTH_SERVICE_TOKEN) private authService: AuthService) {
    this.user = this.authService.getUserDetails();
  }
}

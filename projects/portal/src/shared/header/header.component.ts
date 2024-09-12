import { Component, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AUTH_SERVICE_TOKEN, AuthService } from 'mod-fed-helper';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    @Inject(AUTH_SERVICE_TOKEN) private authService: AuthService,
    private router: Router) {

  }

  logout() {
    this.authService.removeUser();
    this.router.navigate(['\login']);
  }
}

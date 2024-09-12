import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AUTH_SERVICE_TOKEN } from 'mod-fed-helper';
import { HostAuthService } from '../shared/services/auth.service';
import { AuthGuard } from '../shared/guards/auth.guard';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: AUTH_SERVICE_TOKEN, useClass: HostAuthService },
    AuthGuard
  ]
};

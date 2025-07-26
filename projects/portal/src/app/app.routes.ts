import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { AppThemeComponent } from '../shared/app-theme/app-theme.component';
import { AuthThemeComponent } from '../shared/auth-theme/auth-theme.component';
import { AuthGuard } from '../shared/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: AuthThemeComponent,
        loadChildren: () =>
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4401/remoteEntry.js',
                exposedModule: './Routes',
            }).then((m) => m.routes),
    },
    {
        path: 'products',
        component: AppThemeComponent,
        canActivate: [AuthGuard],
        loadChildren: () =>
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4402/remoteEntry.js',
                exposedModule: './Routes',
            }).then((m) => m.routes),
    },
    {
        path: 'cart',
        component: AppThemeComponent,
        canActivate: [AuthGuard],
        loadChildren: () =>
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4403/remoteEntry.js',
                exposedModule: './Routes',
            }).then((m) => m.routes),
    },
];

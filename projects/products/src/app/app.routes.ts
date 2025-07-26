import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'list',
        component: AppComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./product-list/product-list.component').then((m) => m.ProductListComponent),
            },
            {
                path: ':id',
                loadComponent: () => import('./product-detail/product-detail.component').then((m) => m.ProductDetailComponent),
            }
        ]
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    }
];
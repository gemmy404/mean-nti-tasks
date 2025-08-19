import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(component => component.HomeComponent)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.routes').then(module => module.PRODUCTS_ROUTES)
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found.component').then(component => component.NotFoundComponent)
  }
];

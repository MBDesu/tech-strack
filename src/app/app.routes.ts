import { Routes } from '@angular/router';

export enum PageRoute {
  PRODUCTS = 'products',
};

export const routes: Routes = [
  { path: '', redirectTo: PageRoute.PRODUCTS, pathMatch: 'full' },
  {
    path: PageRoute.PRODUCTS,
    loadComponent: () => import('./pages/products-page/products-page.component').then((x) => x.ProductsPageComponent),
    pathMatch: 'full'
  },
];

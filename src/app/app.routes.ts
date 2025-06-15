import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'top', pathMatch: 'full' },
  { path: 'top', loadComponent: () => import('./features/top/top-page') },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'carreer',
    loadComponent: () => import('./carreer/carreer.page').then((m) => m.CarreerPage),
  },
  {
    path: 'benefits',
    loadComponent: () => import('./benefits/benefits.page').then((m) => m.BenefitsPage),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.page').then((m) => m.ContactPage),
  },
];

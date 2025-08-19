import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(component => component.HomeComponent)
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.routes').then(module => module.STUDENTS_ROUTES)
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found.component').then(component => component.NotFoundComponent)
  }
];

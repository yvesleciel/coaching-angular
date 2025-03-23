import { Routes } from '@angular/router';
import {MeanOfPaiementDetailComponent} from './mean-of-paiement-detail/mean-of-paiement-detail.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponentComponent} from './not-found-component/not-found-component.component';
import {meanOfPaiementResolver} from './mean-of-paiement.resolver';
import {meanOfPaiementGuard} from './mean-of-paiement.guard';
import {professorRoutes} from './professor.routes';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'mean-paiement-detail/:code',
    component: MeanOfPaiementDetailComponent,
    resolve: {paiement: meanOfPaiementResolver},
    canActivate: [meanOfPaiementGuard],
    data: {test: 1, value: true}
  },

  // routes for manage professor app
  {
    path: 'professor',
    loadChildren: () => import('./professor.routes').then(m => m.professorRoutes)
  },
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**',
    loadComponent: () => import('./not-found-component/not-found-component.component').then(m => m.NotFoundComponentComponent),
  }
];

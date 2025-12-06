import { Routes } from '@angular/router';

import { ASC } from 'app/config/navigation.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';

import BankAccountResolve from './route/bank-account-routing-resolve.service';

const bankAccountRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/bank-account').then(m => m.BankAccount),
    data: {
      defaultSort: `id,${ASC}`,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    loadComponent: () => import('./detail/bank-account-detail').then(m => m.BankAccountDetail),
    resolve: {
      bankAccount: BankAccountResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    loadComponent: () => import('./update/bank-account-update').then(m => m.BankAccountUpdate),
    resolve: {
      bankAccount: BankAccountResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./update/bank-account-update').then(m => m.BankAccountUpdate),
    resolve: {
      bankAccount: BankAccountResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default bankAccountRoute;

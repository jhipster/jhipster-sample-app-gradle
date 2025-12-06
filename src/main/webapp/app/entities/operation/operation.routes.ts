import { Routes } from '@angular/router';

import { ASC } from 'app/config/navigation.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';

import OperationResolve from './route/operation-routing-resolve.service';

const operationRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/operation').then(m => m.Operation),
    data: {
      defaultSort: `id,${ASC}`,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    loadComponent: () => import('./detail/operation-detail').then(m => m.OperationDetail),
    resolve: {
      operation: OperationResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    loadComponent: () => import('./update/operation-update').then(m => m.OperationUpdate),
    resolve: {
      operation: OperationResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./update/operation-update').then(m => m.OperationUpdate),
    resolve: {
      operation: OperationResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default operationRoute;

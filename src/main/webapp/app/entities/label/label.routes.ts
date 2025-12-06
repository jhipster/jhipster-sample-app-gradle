import { Routes } from '@angular/router';

import { ASC } from 'app/config/navigation.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';

import LabelResolve from './route/label-routing-resolve.service';

const labelRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/label').then(m => m.Label),
    data: {
      defaultSort: `id,${ASC}`,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    loadComponent: () => import('./detail/label-detail').then(m => m.LabelDetail),
    resolve: {
      label: LabelResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    loadComponent: () => import('./update/label-update').then(m => m.LabelUpdate),
    resolve: {
      label: LabelResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    loadComponent: () => import('./update/label-update').then(m => m.LabelUpdate),
    resolve: {
      label: LabelResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default labelRoute;

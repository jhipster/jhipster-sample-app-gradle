import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Routes } from '@angular/router';

import { of } from 'rxjs';

import { UserManagementService } from './service/user-management.service';
import { IUser } from './user-management.model';

export const userManagementResolve: ResolveFn<IUser | null> = (route: ActivatedRouteSnapshot) => {
  const login = route.paramMap.get('login');
  if (login) {
    return inject(UserManagementService).find(login);
  }
  return of(null);
};

const userManagementRoute: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/user-management'),
    data: {
      defaultSort: 'id,asc',
    },
  },
  {
    path: ':login/view',
    loadComponent: () => import('./detail/user-management-detail'),
    resolve: {
      user: userManagementResolve,
    },
  },
  {
    path: 'new',
    loadComponent: () => import('./update/user-management-update'),
    resolve: {
      user: userManagementResolve,
    },
  },
  {
    path: ':login/edit',
    loadComponent: () => import('./update/user-management-update'),
    resolve: {
      user: userManagementResolve,
    },
  },
];

export default userManagementRoute;

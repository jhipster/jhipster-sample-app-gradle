import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';

import Password from './password';

const passwordRoute: Route = {
  path: 'password',
  component: Password,
  title: 'global.menu.account.password',
  canActivate: [UserRouteAccessService],
};

export default passwordRoute;

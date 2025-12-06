import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';

import Sessions from './sessions';

const sessionsRoute: Route = {
  path: 'sessions',
  component: Sessions,
  title: 'global.menu.account.sessions',
  canActivate: [UserRouteAccessService],
};

export default sessionsRoute;

import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';

import Settings from './settings';

const settingsRoute: Route = {
  path: 'settings',
  component: Settings,
  title: 'global.menu.account.settings',
  canActivate: [UserRouteAccessService],
};

export default settingsRoute;

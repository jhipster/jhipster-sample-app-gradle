import { Route } from '@angular/router';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { SessionsComponent } from './sessions.component';

export const sessionsRoute: Route = {
  path: 'sessions',
  component: SessionsComponent,
  data: {
    authorities: [Authority.USER],
    pageTitle: 'global.menu.account.sessions',
  },
  canActivate: [UserRouteAccessService],
};

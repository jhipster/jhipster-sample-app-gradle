import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { User } from '../user-management.model';

@Component({
  selector: 'jhi-user-mgmt-detail',
  templateUrl: './user-management-detail.html',
  imports: [RouterLink, SharedModule],
})
export default class UserManagementDetail {
  user = input<User | null>(null);
}

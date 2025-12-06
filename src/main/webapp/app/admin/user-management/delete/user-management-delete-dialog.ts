import { Component, inject } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { UserManagementService } from '../service/user-management.service';
import { User } from '../user-management.model';

@Component({
  selector: 'jhi-user-mgmt-delete-dialog',
  templateUrl: './user-management-delete-dialog.html',
  imports: [SharedModule],
})
export default class UserManagementDeleteDialog {
  user?: User;

  private readonly userService = inject(UserManagementService);
  private readonly activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(login: string): void {
    this.userService.delete(login).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}

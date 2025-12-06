import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import SharedModule from 'app/shared/shared.module';
import { IBankAccount } from '../bank-account.model';
import { BankAccountService } from '../service/bank-account.service';

@Component({
  templateUrl: './bank-account-delete-dialog.html',
  imports: [SharedModule, FormsModule],
})
export class BankAccountDeleteDialog {
  bankAccount?: IBankAccount;

  protected bankAccountService = inject(BankAccountService);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.bankAccountService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}

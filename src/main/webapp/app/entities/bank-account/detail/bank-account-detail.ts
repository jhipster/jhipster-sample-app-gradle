import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { IBankAccount } from '../bank-account.model';

@Component({
  selector: 'jhi-bank-account-detail',
  templateUrl: './bank-account-detail.html',
  imports: [SharedModule, RouterLink],
})
export class BankAccountDetail {
  bankAccount = input<IBankAccount | null>(null);

  previousState(): void {
    globalThis.history.back();
  }
}

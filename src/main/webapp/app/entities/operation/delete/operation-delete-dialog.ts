import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import SharedModule from 'app/shared/shared.module';
import { IOperation } from '../operation.model';
import { OperationService } from '../service/operation.service';

@Component({
  templateUrl: './operation-delete-dialog.html',
  imports: [SharedModule, FormsModule],
})
export class OperationDeleteDialog {
  operation?: IOperation;

  protected operationService = inject(OperationService);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.operationService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}

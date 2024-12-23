import { Component, OnInit, inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IBankAccount } from 'app/entities/bank-account/bank-account.model';
import { BankAccountService } from 'app/entities/bank-account/service/bank-account.service';
import { ILabel } from 'app/entities/label/label.model';
import { LabelService } from 'app/entities/label/service/label.service';
import { OperationService } from '../service/operation.service';
import { IOperation } from '../operation.model';
import { OperationFormGroup, OperationFormService } from './operation-form.service';

@Component({
  selector: 'jhi-operation-update',
  templateUrl: './operation-update.component.html',
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
})
export class OperationUpdateComponent implements OnInit {
  isSaving = false;
  operation: IOperation | null = null;

  bankAccountsSharedCollection: IBankAccount[] = [];
  labelsSharedCollection: ILabel[] = [];

  protected operationService = inject(OperationService);
  protected operationFormService = inject(OperationFormService);
  protected bankAccountService = inject(BankAccountService);
  protected labelService = inject(LabelService);
  protected activatedRoute = inject(ActivatedRoute);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  editForm: OperationFormGroup = this.operationFormService.createOperationFormGroup();

  compareBankAccount = (o1: IBankAccount | null, o2: IBankAccount | null): boolean => this.bankAccountService.compareBankAccount(o1, o2);

  compareLabel = (o1: ILabel | null, o2: ILabel | null): boolean => this.labelService.compareLabel(o1, o2);

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ operation }) => {
      this.operation = operation;
      if (operation) {
        this.updateForm(operation);
      }

      this.loadRelationshipsOptions();
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const operation = this.operationFormService.getOperation(this.editForm);
    if (operation.id !== null) {
      this.subscribeToSaveResponse(this.operationService.update(operation));
    } else {
      this.subscribeToSaveResponse(this.operationService.create(operation));
    }
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IOperation>>): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  protected onSaveSuccess(): void {
    this.previousState();
  }

  protected onSaveError(): void {
    // Api for inheritance.
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(operation: IOperation): void {
    this.operation = operation;
    this.operationFormService.resetForm(this.editForm, operation);

    this.bankAccountsSharedCollection = this.bankAccountService.addBankAccountToCollectionIfMissing<IBankAccount>(
      this.bankAccountsSharedCollection,
      operation.bankAccount,
    );
    this.labelsSharedCollection = this.labelService.addLabelToCollectionIfMissing<ILabel>(
      this.labelsSharedCollection,
      ...(operation.labels ?? []),
    );
  }

  protected loadRelationshipsOptions(): void {
    this.bankAccountService
      .query()
      .pipe(map((res: HttpResponse<IBankAccount[]>) => res.body ?? []))
      .pipe(
        map((bankAccounts: IBankAccount[]) =>
          this.bankAccountService.addBankAccountToCollectionIfMissing<IBankAccount>(bankAccounts, this.operation?.bankAccount),
        ),
      )
      .subscribe((bankAccounts: IBankAccount[]) => (this.bankAccountsSharedCollection = bankAccounts));

    this.labelService
      .query()
      .pipe(map((res: HttpResponse<ILabel[]>) => res.body ?? []))
      .pipe(map((labels: ILabel[]) => this.labelService.addLabelToCollectionIfMissing<ILabel>(labels, ...(this.operation?.labels ?? []))))
      .subscribe((labels: ILabel[]) => (this.labelsSharedCollection = labels));
  }
}

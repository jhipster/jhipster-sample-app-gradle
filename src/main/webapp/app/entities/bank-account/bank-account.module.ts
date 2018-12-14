import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterGradleSampleApplicationSharedModule } from 'app/shared';
import { JhipsterGradleSampleApplicationAdminModule } from 'app/admin/admin.module';
import {
  BankAccountComponent,
  BankAccountDetailComponent,
  BankAccountUpdateComponent,
  BankAccountDeletePopupComponent,
  BankAccountDeleteDialogComponent,
  bankAccountRoute,
  bankAccountPopupRoute
} from './';

const ENTITY_STATES = [...bankAccountRoute, ...bankAccountPopupRoute];

@NgModule({
  imports: [JhipsterGradleSampleApplicationSharedModule, JhipsterGradleSampleApplicationAdminModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    BankAccountComponent,
    BankAccountDetailComponent,
    BankAccountUpdateComponent,
    BankAccountDeleteDialogComponent,
    BankAccountDeletePopupComponent
  ],
  entryComponents: [BankAccountComponent, BankAccountUpdateComponent, BankAccountDeleteDialogComponent, BankAccountDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterGradleSampleApplicationBankAccountModule {}

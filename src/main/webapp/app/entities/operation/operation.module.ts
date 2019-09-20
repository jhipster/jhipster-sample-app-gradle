import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterGradleSampleApplicationSharedModule } from 'app/shared/shared.module';
import { OperationComponent } from './operation.component';
import { OperationDetailComponent } from './operation-detail.component';
import { OperationUpdateComponent } from './operation-update.component';
import { OperationDeletePopupComponent, OperationDeleteDialogComponent } from './operation-delete-dialog.component';
import { operationRoute, operationPopupRoute } from './operation.route';

const ENTITY_STATES = [...operationRoute, ...operationPopupRoute];

@NgModule({
  imports: [JhipsterGradleSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    OperationComponent,
    OperationDetailComponent,
    OperationUpdateComponent,
    OperationDeleteDialogComponent,
    OperationDeletePopupComponent
  ],
  entryComponents: [OperationDeleteDialogComponent]
})
export class JhipsterGradleSampleApplicationOperationModule {}

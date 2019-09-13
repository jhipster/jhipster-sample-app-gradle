import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterGradleSampleApplicationSharedModule } from 'app/shared/shared.module';
import { LabelComponent } from './label.component';
import { LabelDetailComponent } from './label-detail.component';
import { LabelUpdateComponent } from './label-update.component';
import { LabelDeletePopupComponent, LabelDeleteDialogComponent } from './label-delete-dialog.component';
import { labelRoute, labelPopupRoute } from './label.route';

const ENTITY_STATES = [...labelRoute, ...labelPopupRoute];

@NgModule({
  imports: [JhipsterGradleSampleApplicationSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [LabelComponent, LabelDetailComponent, LabelUpdateComponent, LabelDeleteDialogComponent, LabelDeletePopupComponent],
  entryComponents: [LabelComponent, LabelUpdateComponent, LabelDeleteDialogComponent, LabelDeletePopupComponent]
})
export class JhipsterGradleSampleApplicationLabelModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterGradleSampleApplicationSharedModule } from 'app/shared/shared.module';

import { AuditsComponent } from './audits.component';

import { auditsRoute } from './audits.route';

@NgModule({
  imports: [JhipsterGradleSampleApplicationSharedModule, RouterModule.forChild([auditsRoute])],
  declarations: [AuditsComponent],
})
export class AuditsModule {}

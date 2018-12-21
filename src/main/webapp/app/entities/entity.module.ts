import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterGradleSampleApplicationBankAccountModule } from './bank-account/bank-account.module';
import { JhipsterGradleSampleApplicationLabelModule } from './label/label.module';
import { JhipsterGradleSampleApplicationOperationModule } from './operation/operation.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterGradleSampleApplicationBankAccountModule,
        JhipsterGradleSampleApplicationLabelModule,
        JhipsterGradleSampleApplicationOperationModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterGradleSampleApplicationEntityModule {}

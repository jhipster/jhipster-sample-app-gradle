import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'bank-account',
        loadChildren: () => import('./bank-account/bank-account.module').then(m => m.JhipsterGradleSampleApplicationBankAccountModule)
      },
      {
        path: 'label',
        loadChildren: () => import('./label/label.module').then(m => m.JhipsterGradleSampleApplicationLabelModule)
      },
      {
        path: 'operation',
        loadChildren: () => import('./operation/operation.module').then(m => m.JhipsterGradleSampleApplicationOperationModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterGradleSampleApplicationEntityModule {}

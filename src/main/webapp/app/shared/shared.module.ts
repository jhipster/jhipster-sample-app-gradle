import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JhipsterGradleSampleApplicationSharedLibsModule,
  JhipsterGradleSampleApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JhipsterGradleSampleApplicationSharedLibsModule, JhipsterGradleSampleApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipsterGradleSampleApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterGradleSampleApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterGradleSampleApplicationSharedModule
    };
  }
}

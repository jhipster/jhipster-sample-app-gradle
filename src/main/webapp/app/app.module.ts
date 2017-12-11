import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterGradleSampleApplicationSharedModule, UserRouteAccessService } from './shared';
import { JhipsterGradleSampleApplicationAppRoutingModule} from './app-routing.module';
import { JhipsterGradleSampleApplicationHomeModule } from './home/home.module';
import { JhipsterGradleSampleApplicationAdminModule } from './admin/admin.module';
import { JhipsterGradleSampleApplicationAccountModule } from './account/account.module';
import { JhipsterGradleSampleApplicationEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterGradleSampleApplicationAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterGradleSampleApplicationSharedModule,
        JhipsterGradleSampleApplicationHomeModule,
        JhipsterGradleSampleApplicationAdminModule,
        JhipsterGradleSampleApplicationAccountModule,
        JhipsterGradleSampleApplicationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterGradleSampleApplicationAppModule {}

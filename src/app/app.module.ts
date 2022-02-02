import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {APP_INITIALIZER, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import localeIt from '@angular/common/locales/it';
import {
    BDIDatagridModule,
    BDIDropdownModule,
    BDIModalModule,
    BDIPopoverModule,
    BDITabViewModule,
    BDITooltipModule,
    TooltipDirective,
    BDIMultiselectModule,
} from 'scam-bdi-uikit';
import {PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {
    AppAsideModule,
    AppBreadcrumbModule,
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    DefaultLayoutComponent
} from './layout';
import {IApplicationConfig} from './models/applicationconfig';
import {AppInitializerService, ConfigurationService, LokiHttpInterceptor} from './services';
import {P401Component} from './views/error/401.component';
import {P403Component} from './views/error/403.component';
import {P404Component} from './views/error/404.component';
import {P500Component} from './views/error/500.component';
import {AppInfoComponent} from './views/app-info/app-info.component';
import {IUser} from './models';

registerLocaleData(localeIt);

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

// Import containers
const APP_CONTAINERS = [
    DefaultLayoutComponent
];


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AppAsideModule,
        AppBreadcrumbModule.forRoot(),
        AppFooterModule,
        AppHeaderModule,
        AppSidebarModule,
        PerfectScrollbarModule,
        BDIDropdownModule.forRoot(),
        BDITabViewModule.forRoot(),
        HttpClientModule,
        BDIDatagridModule.forRoot(),
        BDIModalModule.forRoot(),
        BDIPopoverModule.forRoot(),
        BDITooltipModule.forRoot(),
        AngularMultiSelectModule,
        BDIMultiselectModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        ...APP_CONTAINERS,
        P401Component,
        P403Component,
        P404Component,
        P500Component,
        AppInfoComponent
    ],
    providers: [
        AppInitializerService,
        ConfigurationService,
        { // APP_INITIALIZER, loads env variables from WebServlet before boostrapping
            provide: APP_INITIALIZER,
            useFactory: initConfiguration,
            deps: [AppInitializerService],
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LokiHttpInterceptor,
            multi: true
        },
        { provide: LOCALE_ID, useValue: 'it' }
    ],
    exports: [TooltipDirective],
    entryComponents: [AppInfoComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

export function initConfiguration(appInitializer: AppInitializerService): () => Promise<[IUser, IApplicationConfig]> | string {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('loaded');
    return () => appInitializer.initialize();
}

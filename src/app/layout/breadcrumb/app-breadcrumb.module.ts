import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// App Breadcrumb Component
import { AppBreadcrumbService } from './app-breadcrumb.service';
import { LokiBreadcrumbComponent } from './loki-breadcrumb.component';

// @dynamic
@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [LokiBreadcrumbComponent],
    declarations: [LokiBreadcrumbComponent]
})
export class AppBreadcrumbModule {
    static forRoot(config?: any): ModuleWithProviders {
        return {
            ngModule: AppBreadcrumbModule,
            providers: [
                AppBreadcrumbService
            ]
        };
    }
}

// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinningLoaderComponent } from './spinning-loader/spinning-loader.component';
import {BDIAlertModule, BDIDatepickerModule, BDIMultiselectModule, BDITabViewModule} from 'scam-bdi-uikit';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TabContainerComponent } from './tab/tab-container/tab-container.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        BDIAlertModule.forRoot(),
        BDIDatepickerModule,
        BDITabViewModule.forRoot(),
        BDIMultiselectModule.forRoot()
    ],
    declarations: [
        SpinningLoaderComponent,
        TabContainerComponent
    ],
    providers: [
    ],
    exports: [
        SpinningLoaderComponent,
        TabContainerComponent
    ]
})
export class GepaGuiCommonModule { }

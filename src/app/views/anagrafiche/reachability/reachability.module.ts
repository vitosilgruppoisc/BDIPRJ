import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReachabilityRoutingModule } from './reachability-routing.module';
import { ReachabilityComponent } from './reachability/reachability.component';
import {GepaGuiCommonModule} from "../../../common/gepagui-common.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BDIAlertModule, BDIDatagridModule, BDIDatepickerModule, BDITooltipModule} from "scam-bdi-uikit";
import {GenericTableModule} from "../generic-table/generic-table.module";
import {InfoPanelModule} from "../info-panel/info-panel.module";
import {GenericResultRenderComponent} from "../generic-result-render/generic-result-render.component";
import {GenericResultRenderModule} from "../generic-result-render/generic-result-render.module";


@NgModule({
  declarations: [ReachabilityComponent],
  imports: [
    CommonModule,
    GepaGuiCommonModule,
    ReachabilityRoutingModule,
    ReactiveFormsModule,
    BDIAlertModule.forRoot(),
    BDIDatepickerModule,
    FormsModule,
    GenericTableModule,
    InfoPanelModule,
    BDIDatagridModule.withComponents([
      GenericResultRenderComponent,
    ]),
    BDITooltipModule.forRoot(),
    GenericResultRenderModule
  ],
})
export class ReachabilityModule { }

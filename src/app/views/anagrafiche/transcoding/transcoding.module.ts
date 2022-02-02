import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranscodingRoutingModule } from './transcoding-routing.module';
import { TranscodingComponent } from './transcoding/transcoding.component';
import {GepaGuiCommonModule} from "../../../common/gepagui-common.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BDIAlertModule, BDIDatagridModule, BDIDatepickerModule, BDITooltipModule} from "scam-bdi-uikit";
import {GenericTableModule} from "../generic-table/generic-table.module";
import {InfoPanelModule} from "../info-panel/info-panel.module";
import {GenericResultRenderComponent} from "../generic-result-render/generic-result-render.component";
import {GenericResultRenderModule} from "../generic-result-render/generic-result-render.module";


@NgModule({
  declarations: [TranscodingComponent],
  imports: [
    CommonModule,
    GepaGuiCommonModule,
    TranscodingRoutingModule,
    ReactiveFormsModule,
    BDIAlertModule.forRoot(),
    BDIDatepickerModule,
    FormsModule,
    GenericTableModule,
    InfoPanelModule,
    BDIDatagridModule.withComponents([
      GenericResultRenderComponent
    ]),
    BDITooltipModule.forRoot(),
    GenericResultRenderModule
  ],
})
export class TranscodingModule { }

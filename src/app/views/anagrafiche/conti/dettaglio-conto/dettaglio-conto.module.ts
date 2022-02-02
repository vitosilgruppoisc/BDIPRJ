import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DettaglioContoRoutingModule } from './dettaglio-conto-routing.module';
import {DettaglioContoComponent} from './dettaglio-conto.component';
import {GepaGuiCommonModule} from '../../../../common/gepagui-common.module';
import {ContiRoutingModule} from '../conti-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BDIAlertModule, BDIDatagridModule, BDIDatepickerModule} from 'scam-bdi-uikit';
import {GenericTableModule} from '../../generic-table/generic-table.module';
import {InfoPanelModule} from '../../info-panel/info-panel.module';
import {GenericActionRenderComponent} from '../../generic-action-render/generic-action-render.component';
import { BDITooltipModule, TooltipDirective } from 'scam-bdi-uikit';
import {GenericActionRenderModule} from '../../generic-action-render/generic-action-render.module';


@NgModule({
  declarations: [DettaglioContoComponent],
  imports: [
    CommonModule,
    DettaglioContoRoutingModule,
    GepaGuiCommonModule,
    ReactiveFormsModule,
    BDIAlertModule.forRoot(),
    BDIDatepickerModule,
    FormsModule,
    GenericTableModule,
    InfoPanelModule,
    BDIDatagridModule.withComponents([
      GenericActionRenderComponent,
    ]),
   BDITooltipModule.forRoot(),
    GenericActionRenderModule
  ]
})
export class DettaglioContoModule { }

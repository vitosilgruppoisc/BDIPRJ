import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DettaglioPartyRoutingModule } from './dettaglio-party-routing.module';
import {PartiesRoutingModule} from '../parties-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BDIAlertModule, BDIDatagridModule, BDIDatepickerModule} from 'scam-bdi-uikit';
import {GenericTableModule} from '../../generic-table/generic-table.module';
import {InfoPanelModule} from '../../info-panel/info-panel.module';
import {GenericActionRenderComponent} from '../../generic-action-render/generic-action-render.component';
import { BDITooltipModule, TooltipDirective } from 'scam-bdi-uikit';
import {GenericActionRenderModule} from '../../generic-action-render/generic-action-render.module';
import {DettaglioPartyComponent} from './dettaglio-party.component';
import {GepaGuiCommonModule} from '../../../../common/gepagui-common.module';


@NgModule({
  declarations: [DettaglioPartyComponent],
  imports: [
    CommonModule,
    DettaglioPartyRoutingModule,
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
export class DettaglioPartyModule { }

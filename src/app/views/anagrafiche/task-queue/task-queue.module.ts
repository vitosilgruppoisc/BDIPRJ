import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskQueueRoutingModule } from './task-queue-routing.module';
import { RicercaTaskQueueComponent } from './ricerca-task-queue/ricerca-task-queue.component';
import {GepaGuiCommonModule} from '../../../common/gepagui-common.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BDIAlertModule, BDIDatagridModule, BDIDatepickerModule} from 'scam-bdi-uikit';
import {GenericTableModule} from '../generic-table/generic-table.module';
import {InfoPanelModule} from '../info-panel/info-panel.module';
import {GenericActionRenderComponent} from '../generic-action-render/generic-action-render.component';
import {GenericActionRenderModule} from '../generic-action-render/generic-action-render.module';
import { BDITooltipModule, TooltipDirective } from 'scam-bdi-uikit';
import { DettaglioTaskPartyComponent } from './dettaglio-task-party/dettaglio-task-party.component';
import { DettaglioTaskContoComponent } from './dettaglio-task-conto/dettaglio-task-conto.component';
import { DettaglioTaskSfruttamentoComponent } from './dettaglio-task-sfruttamento/dettaglio-task-sfruttamento.component';
import { DettaglioTaskEccTranscodingIngrossoComponent } from './dettaglio-task-ecc-transcoding-ingrosso/dettaglio-task-ecc-transcoding-ingrosso.component';
import { DettaglioTaskEccTranscodingRetailComponent } from './dettaglio-task-ecc-transcoding-retail/dettaglio-task-ecc-transcoding-retail.component';
import { DettaglioTaskEccReachabilityRetailComponent } from './dettaglio-task-ecc-reachability-retail/dettaglio-task-ecc-reachability-retail.component';


@NgModule({
  declarations: [RicercaTaskQueueComponent, DettaglioTaskPartyComponent, DettaglioTaskContoComponent, DettaglioTaskSfruttamentoComponent, DettaglioTaskEccTranscodingIngrossoComponent, DettaglioTaskEccTranscodingRetailComponent, DettaglioTaskEccReachabilityRetailComponent],
  imports: [
    CommonModule,
    GepaGuiCommonModule,
    TaskQueueRoutingModule,
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
  ],
  entryComponents: [GenericActionRenderComponent]
})
export class TaskQueueModule { }

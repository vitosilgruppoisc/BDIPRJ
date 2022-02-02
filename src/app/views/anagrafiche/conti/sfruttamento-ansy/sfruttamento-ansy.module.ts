import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SfruttamentoAnsyRoutingModule } from './sfruttamento-ansy-routing.module';
import {AssocazioneContoStep1Component} from './assocazione-conto-step1/assocazione-conto-step1.component';
import {AssocazioneContoStep2Component} from './assocazione-conto-step2/assocazione-conto-step2.component';
import {GepaGuiCommonModule} from '../../../../common/gepagui-common.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BDIAlertModule, BDIDatagridModule, BDIDatepickerModule} from 'scam-bdi-uikit';
import {GenericTableModule} from '../../generic-table/generic-table.module';
import {InfoPanelModule} from '../../info-panel/info-panel.module';
import {GenericActionRenderComponent} from '../../generic-action-render/generic-action-render.component';
import { BDITooltipModule, TooltipDirective } from 'scam-bdi-uikit';
import {GenericActionRenderModule} from '../../generic-action-render/generic-action-render.module';
import { EliminazioneLogicaAssociazioneContoComponent } from './eliminazione-logica-associazione-conto/eliminazione-logica-associazione-conto.component';


@NgModule({
  declarations: [AssocazioneContoStep1Component, AssocazioneContoStep2Component, EliminazioneLogicaAssociazioneContoComponent],
  imports: [
    CommonModule,
    GepaGuiCommonModule,
    SfruttamentoAnsyRoutingModule,
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
export class SfruttamentoAnsyModule { }

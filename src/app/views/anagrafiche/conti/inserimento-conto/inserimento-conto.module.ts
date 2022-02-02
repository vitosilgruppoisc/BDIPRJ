import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InserimentoContoRoutingModule } from './inserimento-conto-routing.module';
import {RicercaContiComponent} from '../ricerca-conti/ricerca-conti.component';
import {InserimentoContoStep1Component} from './inserimento-conto-step1/inserimento-conto-step1.component';
import {InserimentoContoStep2Component} from './inserimento-conto-step2/inserimento-conto-step2.component';
import {InserimentoContoStep3Component} from './inserimento-conto-step3/inserimento-conto-step3.component';
import {InserimentoContoStep4Component} from './inserimento-conto-step4/inserimento-conto-step4.component';
import {ModificaContoComponent} from '../modifica-conto/modifica-conto.component';
import {EliminazioneLogicaContoComponent} from '../eliminazione-logica-conto/eliminazione-logica-conto.component';
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
  declarations: [InserimentoContoStep1Component, InserimentoContoStep2Component, InserimentoContoStep3Component, InserimentoContoStep4Component],
  imports: [
    CommonModule,
    GepaGuiCommonModule,
    InserimentoContoRoutingModule,
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
export class InserimentoContoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContiRoutingModule } from './conti-routing.module';
import { RicercaContiComponent } from './ricerca-conti/ricerca-conti.component';
import {GepaGuiCommonModule} from '../../../common/gepagui-common.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BDIAlertModule, BDIDatagridModule, BDIDatepickerModule} from 'scam-bdi-uikit';
import {GenericTableModule} from '../generic-table/generic-table.module';
import {InfoPanelModule} from '../info-panel/info-panel.module';
import {GenericActionRenderComponent} from '../generic-action-render/generic-action-render.component';
import { BDITooltipModule, TooltipDirective } from 'scam-bdi-uikit';
import {GenericActionRenderModule} from '../generic-action-render/generic-action-render.module';
import { ModificaContoComponent } from './modifica-conto/modifica-conto.component';
import { EliminazioneLogicaContoComponent } from './eliminazione-logica-conto/eliminazione-logica-conto.component';

@NgModule({
  declarations: [RicercaContiComponent, ModificaContoComponent, EliminazioneLogicaContoComponent],
  imports: [
    CommonModule,
    GepaGuiCommonModule,
    ContiRoutingModule,
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
export class ContiModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartiesRoutingModule } from './parties-routing.module';
import { RicercaPartiesComponent } from './ricerca-parties/ricerca-parties.component';
import {BDIAlertModule, BDIDatagridModule, BDIDatepickerModule} from 'scam-bdi-uikit';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GepaGuiCommonModule} from '../../../common/gepagui-common.module';
import {GenericTableModule} from '../generic-table/generic-table.module';
import {GenericActionRenderComponent} from '../generic-action-render/generic-action-render.component';
import { InserimentoPartyComponent } from './inserimento-party/inserimento-party.component';
import {InfoPanelModule} from '../info-panel/info-panel.module';
import { EliminazioneLogicaPartyComponent } from './eliminazione-logica-party/eliminazione-logica-party.component';
import { ModificaPartyComponent } from './modifica-party/modifica-party.component';
import {GenericActionRenderModule} from '../generic-action-render/generic-action-render.module';
import { BDITooltipModule, TooltipDirective } from 'scam-bdi-uikit';


@NgModule({
  declarations: [RicercaPartiesComponent, InserimentoPartyComponent, /*DettaglioPartyComponent,*/ EliminazioneLogicaPartyComponent, ModificaPartyComponent],
    imports: [
        CommonModule,
        GepaGuiCommonModule,
        PartiesRoutingModule,
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
    entryComponents: [GenericActionRenderComponent],
})
export class PartiesModule { }

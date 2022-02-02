import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EccTranscodingIngrossoRoutingModule } from './ecc-transcoding-ingrosso-routing.module';
import { RicercaEccTranscodingIngrossoComponent } from './ricerca-ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso.component';
import {GepaGuiCommonModule} from "../../../common/gepagui-common.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BDIAlertModule, BDIDatagridModule, BDIDatepickerModule, BDITooltipModule} from "scam-bdi-uikit";
import {GenericTableModule} from "../generic-table/generic-table.module";
import {InfoPanelModule} from "../info-panel/info-panel.module";
import {GenericActionRenderComponent} from "../generic-action-render/generic-action-render.component";
import {GenericActionRenderModule} from "../generic-action-render/generic-action-render.module";
import { DettaglioEccTranscodingIngrossoComponent } from './dettaglio-ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso.component';
import {InserimentoEccTranscodingIngrossoComponent} from "./inserimento-ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso.component";
import { ModificaEccTranscodingIngrossoComponent } from './modifica-ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso.component';
import { EliminazioneLogicaEccTranscodingIngrossoComponent } from './eliminazione-logica-ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso.component';
import {DirectiveModule} from "../../../directive/directive.module";


@NgModule({
  declarations: [RicercaEccTranscodingIngrossoComponent, DettaglioEccTranscodingIngrossoComponent, InserimentoEccTranscodingIngrossoComponent, ModificaEccTranscodingIngrossoComponent, EliminazioneLogicaEccTranscodingIngrossoComponent],
    imports: [
        CommonModule,
        GepaGuiCommonModule,
        EccTranscodingIngrossoRoutingModule,
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
        GenericActionRenderModule,
        DirectiveModule
    ],
  entryComponents: [GenericActionRenderComponent],
})
export class EccTranscodingIngrossoModule { }

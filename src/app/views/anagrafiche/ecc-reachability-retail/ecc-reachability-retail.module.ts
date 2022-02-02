import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EccReachabilityRetailRoutingModule } from './ecc-reachability-retail-routing.module';
import { RicercaEccReachabilityRetailComponent } from './ricerca-ecc-reachability-retail/ricerca-ecc-reachability-retail.component';
import { DettaglioEccReachabilityRetailComponent } from './dettaglio-ecc-reachability-retail/dettaglio-ecc-reachability-retail.component';
import { InserimentoEccReachabilityRetailComponent } from './inserimento-ecc-reachability-retail/inserimento-ecc-reachability-retail.component';
import { ModificaEccReachabilityRetailComponent } from './modifica-ecc-reachability-retail/modifica-ecc-reachability-retail.component';
import {GepaGuiCommonModule} from "../../../common/gepagui-common.module";
import {EccTranscodingRetailRoutingModule} from "../ecc-transcoding-retail/ecc-transcoding-retail-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BDIAlertModule, BDIDatagridModule, BDIDatepickerModule, BDITooltipModule} from "scam-bdi-uikit";
import {GenericTableModule} from "../generic-table/generic-table.module";
import {InfoPanelModule} from "../info-panel/info-panel.module";
import {GenericActionRenderComponent} from "../generic-action-render/generic-action-render.component";
import {GenericActionRenderModule} from "../generic-action-render/generic-action-render.module";
import {DirectiveModule} from "../../../directive/directive.module";


@NgModule({
  declarations: [RicercaEccReachabilityRetailComponent, DettaglioEccReachabilityRetailComponent, InserimentoEccReachabilityRetailComponent, ModificaEccReachabilityRetailComponent],
  imports: [
    CommonModule,
    GepaGuiCommonModule,
    EccReachabilityRetailRoutingModule,
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
export class EccReachabilityRetailModule { }

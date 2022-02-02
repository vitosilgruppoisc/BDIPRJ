import {GenericActionRenderComponent} from "../generic-action-render/generic-action-render.component";
import {EccTranscodingRetailRoutingModule} from "./ecc-transcoding-retail-routing.module";
import {GenericTableModule} from "../generic-table/generic-table.module";
import {CommonModule} from "@angular/common";
import {GepaGuiCommonModule} from "../../../common/gepagui-common.module";
import {BDIAlertModule, BDIDatagridModule, BDIDatepickerModule, BDITooltipModule} from "scam-bdi-uikit";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RicercaEccTranscodingRetailComponent} from "./ricerca-ecc-transcoding-retail/ricerca-ecc-transcoding-retail.component";
import {ModificaEccTranscodingRetailComponent} from "./modifica-ecc-transcoding-retail/modifica-ecc-transcoding-retail.component";
import {DettaglioEccTranscodingRetailComponent} from "./dettaglio-ecc-transcoding-retail/dettaglio-ecc-transcoding-retail.component";
import {InfoPanelModule} from "../info-panel/info-panel.module";
import {GenericActionRenderModule} from "../generic-action-render/generic-action-render.module";
import {InserimentoEccTranscodingRetailComponent} from "./inserimento-ecc-transcoding-retail/inserimento-ecc-transcoding-retail.component";
import {DirectiveModule} from "../../../directive/directive.module";

@NgModule({
  declarations: [RicercaEccTranscodingRetailComponent, DettaglioEccTranscodingRetailComponent, ModificaEccTranscodingRetailComponent, InserimentoEccTranscodingRetailComponent],
  imports: [
    CommonModule,
    GepaGuiCommonModule,
    EccTranscodingRetailRoutingModule,
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
export class EccTranscodingRetailModule { }

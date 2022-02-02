import {ModificaEccTranscodingRetailComponent} from "./modifica-ecc-transcoding-retail/modifica-ecc-transcoding-retail.component";
import {RicercaEccTranscodingRetailComponent} from "./ricerca-ecc-transcoding-retail/ricerca-ecc-transcoding-retail.component";
import {RouterModule, Routes} from "@angular/router";
import {DettaglioEccTranscodingRetailComponent} from "./dettaglio-ecc-transcoding-retail/dettaglio-ecc-transcoding-retail.component";
import {SecurityService} from "../../../services";
import {NgModule} from "@angular/core";
import {InserimentoEccTranscodingRetailComponent} from "./inserimento-ecc-transcoding-retail/inserimento-ecc-transcoding-retail.component";
import {EUserRole} from "../../../models";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Anagrafiche Eccezioni Transcodifica Dettaglio',
    },
    children: [
      {
        path: '',
        component: RicercaEccTranscodingRetailComponent,
        data: {
          title: '',
          roles: [EUserRole.ANAGRAFICHE_DET, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
        },
        canActivate: [SecurityService]
      },
      {
        path: 'dettaglio',
        component: DettaglioEccTranscodingRetailComponent,
        data: {
          title: 'Dettaglio Eccezione Transcodifica Dettaglio',
          roles: [EUserRole.ANAGRAFICHE_DET]
        },
        canActivate: [SecurityService],
      },
      {
        path: 'inserimento',
        component: InserimentoEccTranscodingRetailComponent,
        data: {
          title: 'Nuova Eccezione Transcodifica Dettaglio',
          roles: [EUserRole.ANAGRAFICHE_DET]
        },
        canActivate: [SecurityService],
      },
      {
        path: 'modifica',
        component: ModificaEccTranscodingRetailComponent,
        data: {
          title: 'Modifica Eccezione Transcodifica Dettaglio',
          roles: [EUserRole.ANAGRAFICHE_DET]
        },
        canActivate: [SecurityService],
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EccTranscodingRetailRoutingModule { }

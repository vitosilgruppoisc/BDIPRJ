import {RicercaEccReachabilityRetailComponent} from "./ricerca-ecc-reachability-retail/ricerca-ecc-reachability-retail.component";
import {InserimentoEccReachabilityRetailComponent} from "./inserimento-ecc-reachability-retail/inserimento-ecc-reachability-retail.component";
import {RouterModule, Routes} from "@angular/router";
import {SecurityService} from "../../../services";
import {ModificaEccReachabilityRetailComponent} from "./modifica-ecc-reachability-retail/modifica-ecc-reachability-retail.component";
import {NgModule} from "@angular/core";
import {DettaglioEccReachabilityRetailComponent} from "./dettaglio-ecc-reachability-retail/dettaglio-ecc-reachability-retail.component";
import {EUserRole} from "../../../models";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Anagrafiche Eccezioni Raggiungibilità Dettaglio',
    },
    children: [
      {
        path: '',
        component: RicercaEccReachabilityRetailComponent,
        data: {
          title: '',
          roles: [EUserRole.ANAGRAFICHE_DET, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
        },
        canActivate: [SecurityService]
      },
      {
        path: 'dettaglio',
        component: DettaglioEccReachabilityRetailComponent,
        data: {
          title: 'Dettaglio Eccezione Raggiungibilità Dettaglio',
          roles: [EUserRole.ANAGRAFICHE_DET]
        },
        canActivate: [SecurityService],
      },
      {
        path: 'inserimento',
        component: InserimentoEccReachabilityRetailComponent,
        data: {
          title: 'Nuova Eccezione Raggiungibilità Dettaglio',
          roles: [EUserRole.ANAGRAFICHE_DET]
        },
        canActivate: [SecurityService],
      },
      {
        path: 'modifica',
        component: ModificaEccReachabilityRetailComponent,
        data: {
          title: 'Modifica Eccezione Raggiungibilità Dettaglio',
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
export class EccReachabilityRetailRoutingModule { }

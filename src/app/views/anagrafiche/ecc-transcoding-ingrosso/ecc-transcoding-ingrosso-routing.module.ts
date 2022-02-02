import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EUserRole} from "../../../models";
import {SecurityService} from "../../../services";
import {RicercaEccTranscodingIngrossoComponent} from "./ricerca-ecc-transcoding-ingrosso/ricerca-ecc-transcoding-ingrosso.component";
import {InserimentoPartyComponent} from "../parties/inserimento-party/inserimento-party.component";
import {InserimentoEccTranscodingIngrossoComponent} from "./inserimento-ecc-transcoding-ingrosso/inserimento-ecc-transcoding-ingrosso.component";
import {DettaglioEccTranscodingIngrossoComponent} from "./dettaglio-ecc-transcoding-ingrosso/dettaglio-ecc-transcoding-ingrosso.component";
import {ModificaContoComponent} from "../conti/modifica-conto/modifica-conto.component";
import {EliminazioneLogicaContoComponent} from "../conti/eliminazione-logica-conto/eliminazione-logica-conto.component";
import {ModificaEccTranscodingIngrossoComponent} from "./modifica-ecc-transcoding-ingrosso/modifica-ecc-transcoding-ingrosso.component";
import {EliminazioneLogicaEccTranscodingIngrossoComponent} from "./eliminazione-logica-ecc-transcoding-ingrosso/eliminazione-logica-ecc-transcoding-ingrosso.component";


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Anagrafiche Eccezioni Transcodifica Ingrosso',
    },
    children: [
      {
        path: '',
        component: RicercaEccTranscodingIngrossoComponent,
        data: {
          title: '',
          roles: [EUserRole.ANAGRAFICHE_SPI, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
        },
        canActivate: [SecurityService]
      },
      {
        path: 'dettaglio',
        component: DettaglioEccTranscodingIngrossoComponent,
        data: {
          title: 'Dettaglio Eccezione Transcodifica Ingrosso',
          roles: [EUserRole.ANAGRAFICHE_SPI]
        },
        canActivate: [SecurityService],
      },
      {
        path: 'inserimento',
        component: InserimentoEccTranscodingIngrossoComponent,
        data: {
          title: 'Nuova Eccezione Transcodifica Ingrosso',
          roles: [EUserRole.ANAGRAFICHE_SPI]
        },
        canActivate: [SecurityService],
      },
      {
        path: 'modifica',
        component: ModificaEccTranscodingIngrossoComponent,
        data: {
          title: 'Modifica Eccezione Transcodifica Ingrosso',
          roles: [EUserRole.ANAGRAFICHE_SPI]
        },
        canActivate: [SecurityService],
      },
      {
        path: 'eliminazione-logica',
        component: EliminazioneLogicaEccTranscodingIngrossoComponent,
        data: {
          title: 'Eliminazione Logica Eccezione Transcodifica Ingrosso',
          roles: [EUserRole.ANAGRAFICHE_SPI]
        },
        canActivate: [SecurityService],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EccTranscodingIngrossoRoutingModule { }

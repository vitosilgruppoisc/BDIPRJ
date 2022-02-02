import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RicercaPartiesComponent} from './ricerca-parties/ricerca-parties.component';
import {SecurityService} from '../../../services';
import {EUserRole} from '../../../models';
import {InserimentoPartyComponent} from './inserimento-party/inserimento-party.component';
import {DettaglioPartyComponent} from './dettaglio-party/dettaglio-party.component';
import {EliminazioneLogicaPartyComponent} from './eliminazione-logica-party/eliminazione-logica-party.component';
import {ModificaPartyComponent} from './modifica-party/modifica-party.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Anagrafiche Parties',
    },
    children: [
      {
        path: '',
        component: RicercaPartiesComponent,
        data: {
          title: '',
          roles: [EUserRole.ANAGRAFICHE_SPI, EUserRole.ANAGRAFICHE_BIL, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
        },
        canActivate: [SecurityService],
      },
      {
        path: 'inserimento',
        component: InserimentoPartyComponent,
        data: {
          title: 'Nuovo Party',
          roles: [EUserRole.ANAGRAFICHE_SPI]
        },
        canActivate: [SecurityService],
      },
      {
        path: 'dettaglio',
        loadChildren: () => import('./dettaglio-party/dettaglio-party.module').then(m => m.DettaglioPartyModule)
      },
      {
        path: 'modifica',
        component: ModificaPartyComponent,
        data: {
          title: 'Modifica Party',
          roles: [EUserRole.ANAGRAFICHE_SPI]
        },
        canActivate: [SecurityService],
      },
      {
        path: 'eliminazione-logica',
        component: EliminazioneLogicaPartyComponent,
        data: {
          title: 'Eliminazione Logica Party',
          roles: [EUserRole.ANAGRAFICHE_SPI]
        },
        canActivate: [SecurityService],
      }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartiesRoutingModule { }

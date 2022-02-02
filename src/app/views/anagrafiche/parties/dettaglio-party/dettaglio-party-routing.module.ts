import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RicercaPartiesComponent} from '../ricerca-parties/ricerca-parties.component';
import {EUserRole} from '../../../../models';
import {SecurityService} from '../../../../services';
import {DettaglioPartyComponent} from './dettaglio-party.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dettaglio Party',
    },
    children: [
      {
        path: '',
        component: DettaglioPartyComponent,
        data: {
          title: '',
          roles: [EUserRole.ANAGRAFICHE_SPI, EUserRole.ANAGRAFICHE_BIL, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
        },
        canActivate: [SecurityService],
      },
      {
        path: 'dettaglio-conto',
        loadChildren: () => import('./../../conti/dettaglio-conto/dettaglio-conto.module').then(m => m.DettaglioContoModule)
      },
      {
        path: 'sfruttamento',
        loadChildren: () => import('../../conti/sfruttamento-ansy/sfruttamento-ansy.module').then(m => m.SfruttamentoAnsyModule)
      },
      {
        path: 'inserimento-conto',
        loadChildren: () => import('../../conti/inserimento-conto/inserimento-conto.module').then(m => m.InserimentoContoModule)
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DettaglioPartyRoutingModule { }

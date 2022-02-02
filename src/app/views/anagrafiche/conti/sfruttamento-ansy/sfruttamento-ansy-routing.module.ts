import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EliminazioneLogicaContoComponent} from '../eliminazione-logica-conto/eliminazione-logica-conto.component';
import {EUserRole} from '../../../../models';
import {SecurityService} from '../../../../services';
import {AssocazioneContoStep1Component} from './assocazione-conto-step1/assocazione-conto-step1.component';
import {AssocazioneContoStep2Component} from './assocazione-conto-step2/assocazione-conto-step2.component';
import {DettaglioPartyComponent} from '../../parties/dettaglio-party/dettaglio-party.component';
import {EliminazioneLogicaAssociazioneContoComponent} from './eliminazione-logica-associazione-conto/eliminazione-logica-associazione-conto.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: '',
    },
    children: [
      {
        path: 'associa-step1',
        component: AssocazioneContoStep1Component,
        data: {
          title: 'Associazione Conto',
          roles: [EUserRole.ANAGRAFICHE_SPI]
        },
        canActivate: [SecurityService],
      },
      {
        path: 'associa-step2',
        component: AssocazioneContoStep2Component,
        data: {
          title: 'Associazione Conto',
          roles: [EUserRole.ANAGRAFICHE_SPI]
        },
        canActivate: [SecurityService],
      }
    ]
  },
  {
    path: 'eliminazione-logica',
    component: EliminazioneLogicaAssociazioneContoComponent,
    data: {
      title: 'Eliminazione Sfruttamento Conto',
      roles: [EUserRole.ANAGRAFICHE_SPI]
    },
    canActivate: [SecurityService],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SfruttamentoAnsyRoutingModule { }

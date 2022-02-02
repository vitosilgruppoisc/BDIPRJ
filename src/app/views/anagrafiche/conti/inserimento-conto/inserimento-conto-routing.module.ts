import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RicercaContiComponent} from '../ricerca-conti/ricerca-conti.component';
import {EUserRole} from '../../../../models';
import {SecurityService} from '../../../../services';
import {InserimentoContoStep1Component} from './inserimento-conto-step1/inserimento-conto-step1.component';
import {InserimentoContoStep2Component} from './inserimento-conto-step2/inserimento-conto-step2.component';
import {InserimentoContoStep3Component} from './inserimento-conto-step3/inserimento-conto-step3.component';
import {InserimentoContoStep4Component} from './inserimento-conto-step4/inserimento-conto-step4.component';
import {ModificaContoComponent} from '../modifica-conto/modifica-conto.component';
import {EliminazioneLogicaContoComponent} from '../eliminazione-logica-conto/eliminazione-logica-conto.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Nuovo Conto',
    },
    children: [
      {
        path: 'step1',
        component: InserimentoContoStep1Component,
        data: {
          title: '',
          roles: [EUserRole.ANAGRAFICHE_SPI]
        },
        canActivate: [SecurityService],
      },
      {
        path: 'step2',
        component: InserimentoContoStep2Component,
        data: {
          title: '',
          roles: [EUserRole.ANAGRAFICHE_SPI]
        },
        canActivate: [SecurityService],
      },
      {
        path: 'step3',
        component: InserimentoContoStep3Component,
        data: {
          title: '',
          roles: [EUserRole.ANAGRAFICHE_SPI]
        },
        canActivate: [SecurityService],
      },
      {
        path: 'step4',
        component: InserimentoContoStep4Component,
        data: {
          title: '',
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
export class InserimentoContoRoutingModule { }

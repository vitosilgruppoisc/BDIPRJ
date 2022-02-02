import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AssocazioneContoStep1Component} from '../sfruttamento-ansy/assocazione-conto-step1/assocazione-conto-step1.component';
import {EUserRole} from '../../../../models';
import {SecurityService} from '../../../../services';
import {AssocazioneContoStep2Component} from '../sfruttamento-ansy/assocazione-conto-step2/assocazione-conto-step2.component';
import {DettaglioContoComponent} from './dettaglio-conto.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: '',
    },
    children: [
      {
        path: '',
        component: DettaglioContoComponent,
        data: {
          title: 'Dettaglio Conto',
          roles: [EUserRole.ANAGRAFICHE_SPI, EUserRole.ANAGRAFICHE_BIL, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
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
export class DettaglioContoRoutingModule { }

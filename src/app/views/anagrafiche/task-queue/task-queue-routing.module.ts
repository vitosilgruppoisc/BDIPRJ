import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EUserRole} from '../../../models';
import {SecurityService} from '../../../services';
import {RicercaTaskQueueComponent} from './ricerca-task-queue/ricerca-task-queue.component';
import {DettaglioTaskPartyComponent} from './dettaglio-task-party/dettaglio-task-party.component';
import {DettaglioTaskContoComponent} from './dettaglio-task-conto/dettaglio-task-conto.component';
import {DettaglioTaskSfruttamentoComponent} from './dettaglio-task-sfruttamento/dettaglio-task-sfruttamento.component';
import {DettaglioTaskEccTranscodingIngrossoComponent} from "./dettaglio-task-ecc-transcoding-ingrosso/dettaglio-task-ecc-transcoding-ingrosso.component";
import {DettaglioTaskEccTranscodingRetailComponent} from "./dettaglio-task-ecc-transcoding-retail/dettaglio-task-ecc-transcoding-retail.component";
import {DettaglioTaskEccReachabilityRetailComponent} from "./dettaglio-task-ecc-reachability-retail/dettaglio-task-ecc-reachability-retail.component";


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Anagrafiche Task Queue',
    },
    children: [
      {
        path: '',
        component: RicercaTaskQueueComponent,
        data: {
          title: '',
          roles: [EUserRole.ANAGRAFICHE_SPI, EUserRole.ANAGRAFICHE_BIL, EUserRole.ANAGRAFICHE_VISUALIZZATORE, EUserRole.ANAGRAFICHE_DET]
        },
        canActivate: [SecurityService]
      },
      {
        path: 'dettaglio-party',
        component: DettaglioTaskPartyComponent,
        data: {
          title: 'Dettaglio Party',
          roles: [EUserRole.ANAGRAFICHE_SPI, EUserRole.ANAGRAFICHE_BIL, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
        },
        canActivate: [SecurityService]
      },
      {
        path: 'dettaglio-conto',
        component: DettaglioTaskContoComponent,
        data: {
          title: 'Dettaglio Conto',
          roles: [EUserRole.ANAGRAFICHE_SPI, EUserRole.ANAGRAFICHE_BIL, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
        },
        canActivate: [SecurityService]
      },
      {
        path: 'dettaglio-sfruttamento',
        component: DettaglioTaskSfruttamentoComponent,
        data: {
          title: 'Dettaglio Sfruttamento',
          roles: [EUserRole.ANAGRAFICHE_SPI, EUserRole.ANAGRAFICHE_BIL, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
        },
        canActivate: [SecurityService]
      },
      {
        path: 'dettaglio-ecctranscodingingrosso',
        component: DettaglioTaskEccTranscodingIngrossoComponent,
        data: {
          title: 'Dettaglio Eccezione Transcodifica Ingrosso',
          roles: [EUserRole.ANAGRAFICHE_SPI, EUserRole.ANAGRAFICHE_BIL, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
        },
        canActivate: [SecurityService]
      },
      {
        path: 'dettaglio-ecctranscodingretail',
        component: DettaglioTaskEccTranscodingRetailComponent,
        data: {
          title: 'Dettaglio Eccezione Transcodifica Retail',
          roles: [EUserRole.ANAGRAFICHE_DET, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
        },
        canActivate: [SecurityService]
      },
      {
        path: 'dettaglio-eccreachabilityretail',
        component: DettaglioTaskEccReachabilityRetailComponent,
        data: {
          title: 'Dettaglio Eccezione Raggiungibilità Retail',
          roles: [EUserRole.ANAGRAFICHE_DET, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
        },
        canActivate: [SecurityService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskQueueRoutingModule { }

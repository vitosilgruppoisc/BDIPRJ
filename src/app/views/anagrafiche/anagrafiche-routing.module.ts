import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Anagrafiche'
    },
    children: [
      {
        path: 'parties',
        loadChildren: () => import('./parties/parties.module').then(m => m.PartiesModule)
      },
      {
        path: 'conti',
        data: {
          title: 'Parties'
        },
        loadChildren: () => import('./conti/conti.module').then(m => m.ContiModule)
      },
      {
        path: 'ecctranscodingingrosso',
        data: {
          title: 'Eccezioni Transcodifica Ingrosso'
        },
        loadChildren: () => import('./ecc-transcoding-ingrosso/ecc-transcoding-ingrosso.module').then(m => m.EccTranscodingIngrossoModule)
      },
      {
        path: 'ecctranscodingretail',
        data: {
          title: 'Eccezioni Transcodifica Dettaglio'
        },
        loadChildren: () => import('./ecc-transcoding-retail/ecc-transcoding-retail.module').then(m => m.EccTranscodingRetailModule)
      },
      {
        path: 'eccreachabilityretail',
        data: {
          title: 'Eccezioni Raggiungibilità Dettaglio'
        },
        loadChildren: () => import('./ecc-reachability-retail/ecc-reachability-retail.module').then(m => m.EccReachabilityRetailModule)
      },
      {
        path: 'taskqueue',
        data: {
          title: 'Task Queue'
        },
        loadChildren: () => import('./task-queue/task-queue.module').then(m => m.TaskQueueModule)
      },
      {
        path: 'transcoding',
        data: {
          title: 'Transcodifica'
        },
        loadChildren: () => import('./transcoding/transcoding.module').then(m => m.TranscodingModule)
      },
      {
        path: 'reachability',
        data: {
          title: 'Raggiungibilità'
        },
        loadChildren: () => import('./reachability/reachability.module').then(m => m.ReachabilityModule)
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnagraficheRoutingModule { }

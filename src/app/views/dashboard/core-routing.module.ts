import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EUserRole } from '../../models';
import { MonitoraggioModule } from './monitoraggio/monitoraggio.module';
import { RicercaOperazioniModule } from './ricerca-operazioni/ricerca-operazioni.module';


const routes: Routes = [
  {
    children: [
      {
        loadChildren: () => import('./monitoraggio/monitoraggio.module').then(m => m.MonitoraggioModule)
      },
      {
        loadChildren: () => import('./ricerca-operazioni/ricerca-operazioni.module').then(m => m.RicercaOperazioniModule)
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes), MonitoraggioModule, RicercaOperazioniModule],
  exports: [RouterModule]
})
export class CoreRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EUserRole} from "../../../models";
import {SecurityService} from "../../../services";
import {ReachabilityComponent} from "./reachability/reachability.component";


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Raggiungibilità',
    },
    children: [
      {
        path: '',
        component: ReachabilityComponent,
        data: {
          title: '',
          roles: [EUserRole.ANAGRAFICHE_SPI, EUserRole.ANAGRAFICHE_BIL, EUserRole.ANAGRAFICHE_VISUALIZZATORE, EUserRole.ANAGRAFICHE_DET]
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
export class ReachabilityRoutingModule { }

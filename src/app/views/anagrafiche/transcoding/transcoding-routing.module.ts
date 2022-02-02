import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TranscodingComponent} from "./transcoding/transcoding.component";
import {EUserRole} from "../../../models";
import {SecurityService} from "../../../services";


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Transcodifica',
    },
    children: [
      {
        path: '',
        component: TranscodingComponent,
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
export class TranscodingRoutingModule { }

import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RicercaOperazioniComponent } from "./ricerca-operazioni.component";
import { EUserRole } from "../../../models";


const routes: Routes = [
  //funge da switch in base al ruolo dell'utente
  {
    path: '',
    data: {
      title: 'Gepa - Core',
      roles: [EUserRole.CORE_VALID, EUserRole.CORE_OPERATOR, EUserRole.CORE_TAV_OP1, EUserRole.CORE_TAV_OP2]
    },
    children: [{
      path: 'ricerca',
      component: RicercaOperazioniComponent,
      data: {
        title: 'Ricerca Avanzata',
        roles: [EUserRole.CORE_VALID, EUserRole.CORE_OPERATOR, EUserRole.CORE_TAV_OP1, EUserRole.CORE_TAV_OP2]
      }
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RicercaOperazioniRoutingModule {

}

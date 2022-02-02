import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BDIChartModule, BDIMultiselectModule } from 'scam-bdi-uikit';
import { RicercaOperazioniComponent } from './ricerca-operazioni.component';
import { RicercaOperazioniRoutingModule } from './ricerca-operazioni-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GenericTableModule } from '../../../common/generic-table/generic-table.module';
import { GepaGuiCommonModule } from '../../../common/gepagui-common.module';

@NgModule({
  declarations: [RicercaOperazioniComponent],
  imports: [
    CommonModule,
    GepaGuiCommonModule,
    ReactiveFormsModule,
    FormsModule,
    RicercaOperazioniRoutingModule,
    GenericTableModule,
    BDIChartModule.forRoot(),
    BDIMultiselectModule.forRoot()
  ],
  exports: [RicercaOperazioniComponent],
})
export class RicercaOperazioniModule {
  
}


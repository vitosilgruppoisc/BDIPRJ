import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitoraggioComponent } from './monitoraggio.component';
import { MonitoraggioRoutingModule } from './monitoraggio-routing.module';
import { PieChartModule } from '../../../common/pie-chart/piechart.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { BDIMultiselectModule } from 'scam-bdi-uikit';

@NgModule({
  declarations: [MonitoraggioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MonitoraggioRoutingModule,
    MultiSelectAllModule,
    PieChartModule,
    BDIMultiselectModule.forRoot(),
  ],
  exports: [MonitoraggioComponent],
})
export class MonitoraggioModule { }


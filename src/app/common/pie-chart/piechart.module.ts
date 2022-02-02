import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './piechart.component';
import { BDIChartModule } from 'scam-bdi-uikit';

@NgModule({
  declarations: [PieChartComponent],
  imports: [
    CommonModule,
    BDIChartModule.forRoot()
  ],
  exports: [PieChartComponent],
})
export class PieChartModule { }


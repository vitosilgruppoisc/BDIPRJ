import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GenericTableComponent} from './generic-table.component';
import {BDIDatagridModule} from 'scam-bdi-uikit';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [GenericTableComponent],
  imports: [
    CommonModule,
    BDIDatagridModule.forRoot(),
    FormsModule,
  ],
  exports: [GenericTableComponent]
})
export class GenericTableModule { }

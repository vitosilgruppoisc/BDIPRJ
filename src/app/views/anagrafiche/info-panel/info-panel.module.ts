import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfoPanelComponent} from './info-panel.component';
import { BDITooltipModule, TooltipDirective } from 'scam-bdi-uikit';



@NgModule({
  declarations: [InfoPanelComponent],
  imports: [
    CommonModule,
    BDITooltipModule.forRoot()
  ],
  exports: [InfoPanelComponent]
})
export class InfoPanelModule { }

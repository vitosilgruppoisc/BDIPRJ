import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericActionRenderComponent } from './generic-action-render.component';
import {BDIDatagridModule, BDITooltipModule} from 'scam-bdi-uikit';

@NgModule({
  declarations: [GenericActionRenderComponent],
  imports: [
    CommonModule,
    BDIDatagridModule.forRoot(),
    BDITooltipModule.forRoot(),
  ],
  exports: [GenericActionRenderComponent],
})
export class GenericActionRenderModule { }


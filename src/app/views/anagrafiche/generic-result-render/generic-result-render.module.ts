import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericResultRenderComponent } from './generic-result-render.component';
import {BDIDatagridModule, BDITooltipModule} from "scam-bdi-uikit";
import {GenericActionRenderComponent} from "../generic-action-render/generic-action-render.component";



@NgModule({
  declarations: [GenericResultRenderComponent],
  imports: [
    CommonModule,
    BDIDatagridModule.forRoot(),
    BDITooltipModule.forRoot(),
  ],
  exports: [GenericResultRenderComponent],
})
export class GenericResultRenderModule { }

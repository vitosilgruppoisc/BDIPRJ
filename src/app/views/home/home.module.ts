import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { GepaGuiCommonModule } from '../../common/gepagui-common.module';





@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    GepaGuiCommonModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }

import {Component, NgZone} from '@angular/core';
import { Router} from "@angular/router";
import {ICellRendererAngularComp} from 'scam-bdi-uikit';
import {ResultRenderModel} from "../../../models/result-render-model";

@Component({
  selector: 'app-generic-result-render',
  templateUrl: './generic-result-render.component.html',
  styleUrls: ['./generic-result-render.component.scss']
})
export class GenericResultRenderComponent implements ICellRendererAngularComp {
  private params: any;
  resultRenderModel: ResultRenderModel;

  constructor(private ngZone: NgZone, private router: Router) {}

  agInit(params: any): void {
    this.params = params;
    this.resultRenderModel = this.params.modelFn(this.params.node.data);
  }

  refresh(): boolean {
    return false;
  }
}

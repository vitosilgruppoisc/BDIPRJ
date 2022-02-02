import {Component, EventEmitter, NgZone, Output} from '@angular/core';
import { ICellRendererAngularComp } from 'scam-bdi-uikit';
import {NavigationExtras, Router} from '@angular/router';
import {ActionRenderModel} from '../../models/action-render-model';

@Component({
    selector: 'app-generic-action-render',
    templateUrl: './generic-action-render.component.html',
    styleUrls: ['./generic-action-render.component.scss']
})
export class GenericActionRenderComponent implements ICellRendererAngularComp {
    private params: any;
    actionRenderModel: ActionRenderModel;

    constructor(private ngZone: NgZone, private router: Router) {}

    agInit(params: any): void {
        this.params = params;
        this.actionRenderModel = this.params.modelFn(this.params.node.data);
    }

    navigate(route, routeParam: any, sessionKey: any) {

        this.ngZone.run(() => {
            let navigationExtras: NavigationExtras = {};
            if (!!sessionKey) {
                sessionStorage.setItem(sessionKey, JSON.stringify(routeParam));
            }

            if (!!routeParam) {
                navigationExtras = {
                    queryParams: routeParam
                };
            }
            this.router.navigate([route], navigationExtras);
        });
    }

    refresh(): boolean {
        return false;
    }
}
